/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

function callAlert() {
    navigator.notification.alert(
        'You are wwinner',
        alertDismissed,
        'Game Over',
        'Done'
    );
}
function alertDismissed() {
    alert('You dismissed the alert!')
}

function callConfirm() {
    'You are the winner!', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Game Over',           // title
    ['Restart','Exit']     // buttonLabels
}

function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}

function callPrompt() {
    'Please enter your name',  // message
    onPrompt,                  // callback to invoke
    'Registration',            // title
    ['Ok','Exit'],             // buttonLabels
    'Jane Doe'                 // defaultText
}

function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

function callBeep() {
    // Beep twice!
    navigator.notification.beep(2);
}

function callVibration() {
    // rung trong 3s
    navigator.vibrate(3000);
}

function takePicture() {
    navigator.camera.getPicture(onSuccess, onFail,{
        quality: 50,
        // allow = true co nghia la sau khi chup xong co the chinh sua anh roi moi upload len
        allowEdit: false, 
        // anh tra ve
        destinationType: Camera.DestinationType.FILE_URI
    })
}

function onSuccess(url) {
    alert(url);

    ic = document.getElementById('imageContainer');

    ic.innerHTML = '<img src ="' + url + '" width="50%" />';

}

function onFail() {
    alert('Failed because: ' + message);
}
