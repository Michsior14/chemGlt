import { Meteor } from "meteor/meteor";
import Seed from "../seed";

Meteor.methods({

	seedUsers() {

		Seed("users", {
			data: [
				{
					username: "HopkinsFBI",
					email: "mkmz91@gmail.com",
					password: "password",
					profile: {
						name: {
							first: "Rafal",
							last: "Klimek"
						}
					},
					roles: ["admin"]
				},
				{
					username: "Samantha",
					email: "michau.mrozek@student.uj.edu.pl",
					password: "password",
					profile: {
						name: {
							first: "Michau",
							last: "Mrozek"
						}
					},
					roles: ["admin"]
				}
			]
		});
	}
});