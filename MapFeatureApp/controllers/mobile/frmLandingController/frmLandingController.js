define({ 
  	kfdata : [
                              {
                                "APIName" : "Gesture API",
                                "Description" : "A gesture is an action associated with movement of a mouse or a touch screen action. The developers determine how a gesture should be interpreted and the function that must be executed when a gesture is recognized.",
                                "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;"><b>addGestureRecognizer</b><label><br><label style=color:#f2f1f1><br>This API allows you to set a gesture recognizer for a specified gesture for a specified widget.</label><br><br>Signature:<br><br><label style=color:#ffffff>addGestureRecognizer(gestureType, gestureConfigParams, onGestureClosure)<br></label><br><br><label style="font-weight:bold;color:#f2f1f1;"><b>removeGestureRecognizer</b><label><br><label style=color:#f2f1f1><br>This API allows you to remove the specified gesture recognizer for the specified widget.</label><br><br>Signature:<br><br><label style=color:#ffffff>removeGestureRecognizer(gestureHandle)<br></label>',
                                "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                              },
      						{
                                "APIName" : "Accelerometer API",
                                "Description" : "The Accelerometer API allows you to capture the device motion acceleration in 3D space using an X, Y, Z coordinate system, and also provides out-of-the-box mechanisms to register for shake gesture events.<br><br>This coordinate system is independent of any particular type of device. PFB the description for the coordinate system to be used for the accelerometer API:<br><br><b>X:</b> Floating point value indicating the magnitude of the acceleration force along the X-Axis<br><b>Positive:</b> Towards the right when the device is facing you<br><b>Negative:</b> Towards the left when the device is facing you<br><br><b>Y: </b> Floating point value indicating the magnitude of the acceleration force along the Y-Axis<br><b>Positive:</b> Towards the top of the device<br><b>Negative:</b> Towards the bottom of the device<br><br><b>Z: </b> Floating point value indicating the magnitude of the acceleration force along the Z-Axis<br><b>Positive:</b> The axis coming out from the device screen (towards you) when the device is facing you<br><b>Negative:</b> The axis coming out from the device back (away from you) when the device is facing you<br><br>When a device is laying still with its back on a horizontal surface, each acceleration event has approximately the following values:<br>X = 0,      Y = 0,      Z = -1",
                                "CodeSnippet" : '<label style=color:#f2f1f1>The kony.accelerometer namespace provides the following functions.</label><br><br><label style="font-weight:bold;color:#f2f1f1;"><b>kony.accelerometer.registerAccelerationEvents</b></label><br><label style="font-weight:bold;color:#f2f1f1;"><b>kony.accelerometer.retrieveCurrentAcceleration</b></label><br><label style="font-weight:bold;color:#f2f1f1;"><b>kony.accelerometer.startMonitoringAcceleration</b></label><br><label style="font-weight:bold;color:#f2f1f1;"><b>kony.accelerometer.stopMonitoringAcceleration</b></label><br><label style="font-weight:bold;color:#f2f1f1;"><b>kony.accelerometer.unregisterAccelerationEvents</b></label><br><br><label style=color:#f2f1f1>For the implementation part of the above api\'s, please go through the individual forms</label>',
                                "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#accelereometer_apis.htm%3FTocPath%3DAccelerometer%2520API%7C_____0"> Accelerometer API </a><br>'
                              }
                            ],
	featureSelected:function(){
      	var formToBeNavigated = null;
      	  
     	switch(this.view.segFeatureOptions.selectedRowIndex[1]){
          case 0:	formToBeNavigated = "frmProperties";
            		 data = [
      								{
                                  "APIName" : "Tap Gesture",
                                  "Description" : "A Tap gesture is a click or touch performed on the view.<br><br>Parameter has the following key-value pairs:<br><br> fingers [Number] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.<br><br>taps [Number] - specifies the maximum number of taps that must be respected for a gesture. Possible values are: 1 or 2. Default value is 1.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Tap Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onTapClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmTapController<br>*/</label><br><label style=color:#ffffff>onTapClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addSingleTapGesture<br>@description function to invoke single tap gesture<br>@defined in the frmTapController<br>*/</label><br><label style=color:#ffffff>addSingleTapGesture:function(){<br>var tapConfig={fingers:1,taps:1};<br>this.view.flxSingle.addGestureRecognizer(constants.GESTURE_TYPE_TAP,tapConfig,this.onTapClosure);<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addDoubleTapGesture <br>@description-function to invoke Double tap gesture <br>@defined in the frmTapController<br>*/</label><br><label style=color:#ffffff>  addDoubleTapGesture:function(){<br>var tapConfig={fingers:1,taps:2};<br>this.view.flxDouble.addGestureRecognizer(constants.GESTURE_TYPE_TAP,tapConfig,this.onTapClosure);<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                                }
    							]; 
            		break;
          case 1:	formToBeNavigated = "frmSearchRoutes";
            		 data = [
      								{
                                  "APIName" : "Swipe Gesture",
                                  "Description" : "A Swipe gesture is dragging a finger towards a direction (right, left, top and down).<br><br>Parameter has the following key-value pairs:<br><br> fingers [Number] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Swipe Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onSwipeClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmSwipeController<br>*/</label><br><label style=color:#ffffff>onSwipeClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addSwipeGesture<br>@description function to invoke Swipe gesture<br>@defined in the frmSwipeController<br>*/</label><br><label style=color:#ffffff>addSwipeGesture:function(){<br>var swipeConfig={fingers:1};<br>this.view.flxSwipe.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,swipeConfig,this.onSwipeClosure);<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                                }
    							]; 
            		break;
//           case 2:	formToBeNavigated = "frmLongPress";
//             		data = [
//       								{
//                                   "APIName" : "LongPress Gesture",
//                                   "Description" : "A LongPress gesture is pressing the screen for long enough, and the finger should not move a lot around the pressed point otherwise the gesture fails.<br><br>Parameter has the following key-value pairs:<br><br> pressDuration [Number] - specifies the minimum time interval (in seconds) after which the gesture is recognized as a LONGPRESS. This is not applicable to Windows.",
//                                   "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*LongPress Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onLongpressClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmLongPressController<br>*/</label><br><label style=color:#ffffff>onLongpressClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addLongPressGesture<br>@description function to invoke LongPress gesture<br>@defined in the frmLongPressController<br>*/</label><br><label style=color:#ffffff>addLongPressGesture:function(){<br>var getTime=parseInt(this.view.lstbx.selectedKey);<br>var longConfig={pressDuration:getTime};<br>gesturehandle=this.view.flxLongpress.addGestureRecognizer(constants.GESTURE_TYPE_LONGPRESS,longConfig,this.onLongpressClosure);<br>}<br></label>',
//                                   "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
//                                 }
//     							];
//             		break;
//           case 3:	formToBeNavigated = "frmPan";
//             		data = [
//       								{
//                                   "APIName" : "Pan Gesture",
//                                   "Description" : "A Pan gesture is actually a drag gesture. It’s used when it’s needed to drag views from one point to another.<br><br>Parameter has the following key-value pairs:<br><br> fingers [number] specifies the minimum number of fingers needed to recognize this gesture. Default value is 1.<br><br>continuousEvents [Boolean] indicates if callback should be called continuously for every change beginning from the time the gesture is recognized to the time it ends.",
//                                   "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Pan Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onPanclosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmPanController<br>*/</label><br><label style=color:#ffffff>onPanclosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addPanGesture<br>@description function to invoke Pan gesture<br>@defined in the frmPanController<br>*/</label><br><label style=color:#ffffff>addPanGesture:function(){<br>var panConfig={fingers :1,continuousEvents :false};<br>this.view.flxpan.addGestureRecognizer(constants.GESTURE_TYPE_PAN,panConfig,this.onPanclosure);<br>}<br></label>',
//                                   "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
//                                 }
//     							];
//             		break;
//           case 4:	formToBeNavigated = "frmPinch";
//             		data = [
//       								{
//                                   "APIName" : "Pinch Gesture",
//                                   "Description" : "When you view photos on the Photos app and you use your two fingers to zoom in or out to a photo, then you perform a pinch gesture.<br><br>Parameter has the following key-value pairs:<br><br> Pinch gesture invloves two fingers.<br><br>continuousEvents [Boolean] indicates if callback should be called continuously for every change beginning from the time the gesture is recognized to the time it ends.",
//                                   "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Pinch Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onPinchClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmPinchController<br>*/</label><br><label style=color:#ffffff>onPinchClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addPinchGesture<br>@description function to invoke Pinch gesture<br>@defined in the frmPinchController<br>*/</label><br><label style=color:#ffffff>addPinchGesture:function(){<br>var pinchConfig={fingers :2,continuousEvents :true};<br>this.view.flxPinch.addGestureRecognizer(constants.GESTURE_TYPE_PINCH,pinchConfig,this.onPinchClosure);<br>}<br></label>',
//                                   "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
//                                 }
//     							];
//             		break;
//           case 5:	formToBeNavigated = "frmRotation";
//             		data = [
//       								{
//                                   "APIName" : "Rotation Gesture",
//                                   "Description" : "Rotation gesture is used to rotate a view using two fingers.<br><br>Parameter has the following key-value pairs:<br><br> Rotation gesture involves only two fingers.<br><br>continuousEvents [Boolean] indicates if callback should be called continuously for every change beginning from the time the gesture is recognized to the time it ends.",
//                                   "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Rotation Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onRotateClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmRotationController<br>*/</label><br><label style=color:#ffffff>onRotateClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addRotateGesture<br>@description function to invoke Rotation gesture<br>@defined in the frmRotationController<br>*/</label><br><label style=color:#ffffff>addRotateGesture:function(){<br>var rotateConfig={fingers :2,continuousEvents :true};<br>this.view.flxRotation.addGestureRecognizer(constants.GESTURE_TYPE_ROTATION,rotateConfig,this.onRotateClosure);<br>}<br></label>',
//                                   "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
//                                 }
//     							];
//             		break;
//           case 6:	formToBeNavigated = "frmShake";
//             		data = [
//       								{
//                                   "APIName" : "Shake Event",
//                                   "Description" : "Shake gesture is consider as an event in the Accelerometer API. The “registerAccelerationEvents” and “unregisterAccelerationEvents” help register event handlers for acceleration events, such as “shake”.",
//                                   "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/* RegisterAccelerationEvents */<label><br><label style=color:#f2f1f1>/*<br>@function onshake<br>@description Event that need to be executed when shake gesture is performed<br>@defined in the frmShakeController<br>*/</label><br><label style=color:#ffffff>onshake:function(){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function registerAccelerationEvents<br>@description Registers event handlers for acceleration events, such as \'shake\'.<br>@defined in the frmShakeController<br>*/</label><br><label style=color:#ffffff>registerAccelerationEvents:function(){<br>var events = {shake:this.onshake};<br>kony.accelerometer.registerAccelerationEvents(events);<br>}<br></label>',
//                                   "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#accelerometerfunctions.htm#accelero4%3FTocPath%3DAccelerometer%2520API%7Ckony.accelerometer%2520Namespace%7CFunctions%7C_____1"> RegisterAccelerationEvents API </a><br>'
//                                 }
//     							];
//             		break;
//           case 7:	formToBeNavigated = "frmAcclMonitor";
//             		data = [
//       								{
//                                   "APIName" : "Retrieve Acceleration",
//                                   "Description" : "The “retrieveCurrentAcceleration” method in the Accelerometer API namespace sets callback functions for retrieving the current device acceleration.",
//                                   "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/* RetrieveCurrentAcceleration */</label><br><label style=color:#f2f1f1>/*<br>@function onsuccesscallbackretCurrentAcc<br>@description The callback function that is executed when retrieving the current device acceleration is successful<br>@defined in the frmAcclMonitorController<br>@param accelerometerdata- It is a table containing key-value pairs of x,y,z and timestamp<br>*/</label><br><label style=color:#ffffff>onsuccesscallbackretCurrentAcc: function(accelerometerdata){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function onfailurecallbackretCurrentAcc<br>@description The callback that is executed when an error occurs while retrieving the current device acceleration<br>@defined in the frmAcclMonitorController<br>*/</label><br><label style=color:#ffffff>onfailurecallbackretCurrentAcc: function(){<br>//do something<br>}<br></label>  <label style=color:#f2f1f1>/*<br>@function retrieveCurrentAcceleration<br>@description Sets callback functions for retrieving the current device acceleration.<br>@defined in the frmAcclMonitorController<br>*/</label><br><label style=color:#ffffff>retrieveCurrentAcceleration: function(){<br>kony.accelerometer.retrieveCurrentAcceleration(this.onsuccesscallbackretCurrentAcc,this.onfailurecallbackretCurrentAcc);<br>}<br></label>',
//                                   "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#accelerometerfunctions.htm#accelero%3FTocPath%3DAccelerometer%2520API%7Ckony.accelerometer%2520Namespace%7CFunctions%7C_____2"> RetrieveCurrentAcceleration API </a><br>'
//                                 },
//                       			{
//                                   "APIName" : "Monitor Acceleration",
//                                   "Description" : "The “startMoniteringAcceleration” and “stopMonitoringAcceleration” help monitoring the device's acceleration on a continuous basis.",
//                                   "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/* StartMonitoringAcceleration */</label><br><label style=color:#f2f1f1>/*<br>@function onsuccesscallbackstartmonitoringAcc<br>@description The callback function that is executed when retrieving the current device acceleration is successful<br>@defined in the frmAcclMonitorController<br>@param startmonitoringdata- It is a table containing key-value pairs of x,y,z and timestamp<br>*/</label><br><label style=color:#ffffff>onsuccesscallbackstartmonitoringAcc: function(startmonitoringdata){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function onfailurecallbackstartmonitoringAcc<br>@description The callback that is executed when an error occurs while retrieving the current device acceleration<br>@defined in the frmAcclMonitorController<br>*/</label><br><label style=color:#ffffff>onfailurecallbackstartmonitoringAcc: function(){<br>//do something<br>}<br></label>  <label style=color:#f2f1f1>/*<br>@function startmonitoringAcc<br>@description Starts monitoring the device\'s acceleration on a continuous basis.<br>@defined in the frmAcclMonitorController<br>*/</label><br><label style=color:#ffffff>startmonitoringAcc: function(){<br>kony.accelerometer.startMonitoringAcceleration(this.onsuccesscallbackstartmonitoringAcc,this.onfailurecallbackstartmonitoringAcc,{ frequency : 20, onchange : true } );<br>}<br></label>',
//                                   "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#accelerometerfunctions.htm#accelero2%3FTocPath%3DAccelerometer%2520API%7Ckony.accelerometer%2520Namespace%7CFunctions%7C_____3"> StartMonitoringAcceleration API </a><br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#accelerometerfunctions.htm#accelero3%3FTocPath%3DAccelerometer%2520API%7Ckony.accelerometer%2520Namespace%7CFunctions%7C_____4"> StopMonitoringAcceleration API </a><br>'
//                                 }
//     							];
//             		break;
      
          default:
            		
            		kony.print("You Shld not be here!!!");
            		return;   
        }
      	var ntf = new kony.mvc.Navigation(formToBeNavigated);
    	ntf.navigate();
    }
 });