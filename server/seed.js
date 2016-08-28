import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { Accounts } from "meteor/accounts-base"

Seed = ( collection, options ) => {
	return new Seeder( collection, options);
};

class Seeder {
	constructor( collection, options) {
		if ( !collection || !options ){
			throw new Error( 'Please supply collection to seed and options for seeding. Usage: Seed( collectionName, options ).');
		}
		else {
			this.collection = this.getCollection( collection );
			this.options = options;
			if( typeof this.collection !== 'undefined' ){
				this.seed();
			}
			else{
				throw new Error( 'Sorry, coudn\'t find the collection!' );
			}

		}
	}

	seed() {
		let options = this.options;
		let data	= options.data;
		let model	= options.model;

		if (data && !model ){
			this.sow( data );
		}
		if (model && !data ){
			this.sow( model );
		}

		if ( options.data && options.model ){
			throw new Error( 'Please choose to seed from either a data collection or a model. Cannot do both!' );
		}
	}

	getCollection( collection ){
		let collectionName = this.sanitizeCollectionName( collection );
		return collectionName === 'Users' ? Meteor.users : global[ collectionName ];
	}

	sanitizeCollectionName( collection ){
		return collection[0].toUpperCase() + collection.slice(1);
	}

	sow ( data ){
		let isDataArray		= data instanceof Array;
		let loopLength		= isDataArray ? data.length : this.options.min;
		let hasData			= this.checkForExistingData();
		let collectionName 	= this.collection._name;
		let envAllowed		= this.envAllowed();
		this.isUsers		= collectionName === 'users';
		console.log(( this.collection._name ));
		if ( envAllowed ){
			for (let i = 0; i < loopLength; i++){
				let value = isDataArray ? data[i] : data(i);

				this.insertRecord( value );
			}
		}
	}

	checkForExistingData(){
		let existingCount = this.collection.find().count();
		return this.options.min ? existingCount >= this.options.min : existingCount > 0;
	}

	envAllowed(){
		let envs = this.options.environments;
		if ( envs ){
			return envs.indexOf( process.env.NODE_ENV ) > -1;
		}
		return true;
	}

	insertRecord( value ){
		if ( this.isUsers ){
			this.createUser( value );
		}
		else {
			this.collection.insert( value );
		}
	}

	createUser( user ){
		let isExistingUser = Meteor.users.findOne({
			'emails.address': user.email
		});
		if ( !isExistingUser ){
			let userId = Accounts.createUser({
				username: 	user.username,
				email: 		user.email,
				password: 	user.password,
				profile: 	user.profile || {}
			});

			if ( user.roles && Roles !== 'undefined' ){
				Roles.addUsersToRoles( userId, user.roles );
			}
		}
	}
}

export default Seed;
