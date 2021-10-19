# GnssClockPlugin
# ToastyPlugin
It’s an Android Cordova plugin that provides GnssClock measurements

1. To add this plugin to your project run the following command in the root folder:                                                           
    cordova plugin add https://github.com/navroopsinghsandhu/GnssClockPlugin                                                                         
2. Then add the following code in www/index.js of your project                                                                                                    
    window.plugins.toastyPlugin.getgpsTime('', 'long', function(event) {                                                                               
          //This the success callback function 
          //you can access the data using "event"                                                                                                           
        }, function(err) {                                                                                                                                      
          console.log('Uh oh... ' + err);                                                                                                                   
        }); 
