package com.Omran;

import android.app.Application;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.wenkesj.voice.VoicePackage;

import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.facebook.react.ReactApplication;
import com.reactlibrary.RNPushePackage;
import com.brentvatne.react.ReactVideoPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.centaurwarchief.smslistener.SmsListenerPackage;
import com.mapbox.rctmgl.RCTMGLPackage;


import java.util.Arrays;
import java.util.List;


public class MainApplication extends NavigationApplication {



 
    
    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

     @Override
      public void onCreate() { // <-- Check this block exists
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false); // <-- Check this line exists within the block
      }
    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
            new VectorIconsPackage(),
            new LinearGradientPackage(),
            new ReanimatedPackage(),
            new RNGestureHandlerPackage(),
            new ReactVideoPackage(),
            new PickerPackage(),
            new FastImageViewPackage(),
            new RNPushePackage(),
            new SmsListenerPackage(),
            new RCTMGLPackage(),
            new VoicePackage()

        );
    }

  
  
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
}