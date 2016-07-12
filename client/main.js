if (Meteor.isClient) {

  Meteor.call('printIP', function(err, ip) { console.log(ip); });
  
  Meteor.call('date', function(err, date) { console.log(date); });

  // counter starts at 1337
  Session.setDefault('counter', 1337);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click #button1': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      console.log('HEY, STOP THAT!');
    },
    
    'click #button2': function () {
      // decrement the counter when button is clicked
      Session.set('counter', Session.get('counter') - 1);
      console.log('OUCH!');
    }
    
  });

  Template.hello.events({
    "click button.upload": function(){
        var files = $("input.file_bag")[0].files;

        S3.upload({
                files:files,
                path:"subfolder"
            },function(e,r){
                console.log(r);
        });
    }
});

Template.hello.helpers({
    "files": function(){
        return S3.collection.find();
    }
 });
}
