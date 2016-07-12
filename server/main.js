

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

S3.config = {
    key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET
//    region: 'process.env.S3_REGION' // Only needed if not "us-east-1" or "us-standard"
};

Meteor.methods({
   printIP: function() {
      var ip;
      if (this.connection.httpHeaders && this.connection.httpHeaders['x-forwarded-for']) {
         ip = this.connection.httpHeaders['x-forwarded-for'];
      } else {
         ip = this.connection.clientAddress;
      }
      console.log(ip);
      return ip;
   }
});

Meteor.methods({
	date: function() {
		var date = new Date();  //create a new date with current date and time
		console.log(date);
		return date;
	}
});