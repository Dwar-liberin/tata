
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "TATA",
              serverUrl: "https://staging.lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = () => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  const font = await loadFont();
  

  
    
      const image_6db67eb8_7c3cfdc9_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_6db67eb8_7c3cfdc9_texture = await loadTexture("assets/image 242 (1).png");
  const image_6db67eb8_7c3cfdc9_image = new THREE.MeshBasicMaterial({
      map: image_6db67eb8_7c3cfdc9_texture,
    });
    const image_6db67eb8_7c3cfdc9 = new THREE.Mesh(image_6db67eb8_7c3cfdc9_iconGeometry, image_6db67eb8_7c3cfdc9_image);
    image_6db67eb8_7c3cfdc9.scale.set(0.2, 0.2, 0.2);
    image_6db67eb8_7c3cfdc9.position.set(0, -0.5, 0.04);
    image_6db67eb8_7c3cfdc9.rotation.set(-0.001, 0, 0);
    image_6db67eb8_7c3cfdc9.userData.clickable = true
    
    image_6db67eb8_7c3cfdc9.userData.eventName ="Blinkit"
const image_77709c62_94cd5e60_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_77709c62_94cd5e60_texture = await loadTexture("assets/image 243.png");
  const image_77709c62_94cd5e60_image = new THREE.MeshBasicMaterial({
      map: image_77709c62_94cd5e60_texture,
    });
    const image_77709c62_94cd5e60 = new THREE.Mesh(image_77709c62_94cd5e60_iconGeometry, image_77709c62_94cd5e60_image);
    image_77709c62_94cd5e60.scale.set(0.2, 0.2, 0.2);
    image_77709c62_94cd5e60.position.set(0.37, -0.498, 0.04);
    image_77709c62_94cd5e60.rotation.set(-0.001, 0, 0);
    image_77709c62_94cd5e60.userData.clickable = true
    
    image_77709c62_94cd5e60.userData.eventName ="Flipkart"
const image_3b5710c2_b4983e48_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_3b5710c2_b4983e48_texture = await loadTexture("assets/image 244.png");
  const image_3b5710c2_b4983e48_image = new THREE.MeshBasicMaterial({
      map: image_3b5710c2_b4983e48_texture,
    });
    const image_3b5710c2_b4983e48 = new THREE.Mesh(image_3b5710c2_b4983e48_iconGeometry, image_3b5710c2_b4983e48_image);
    image_3b5710c2_b4983e48.scale.set(0.2, 0.2, 0.2);
    image_3b5710c2_b4983e48.position.set(-0.37, -0.5, 0.04);
    image_3b5710c2_b4983e48.rotation.set(-0.001, 0, 0);
    image_3b5710c2_b4983e48.userData.clickable = true
    
    image_3b5710c2_b4983e48.userData.eventName ="Amazon"
const target_imageundefi054fa_iconGeometry = new THREE.PlaneGeometry(1, 0.6333333333333333);
   const target_imageundefi054fa_texture = await loadTexture("assets/sanjeev kapoor tata sampann.png");
  const target_imageundefi054fa_image = new THREE.MeshBasicMaterial({
      map: target_imageundefi054fa_texture,
    });
    const target_imageundefi054fa = new THREE.Mesh(target_imageundefi054fa_iconGeometry, target_imageundefi054fa_image);
    target_imageundefi054fa.scale.set(1, 1, 1);
    target_imageundefi054fa.position.set(0.01, -0.01, 0.01);
    target_imageundefi054fa.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_45541dbf34b_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_45541dbf34b_Item0Video = await loadVideo("assets/Tata Sampann Masale with Natural Oils.mp4");

    const video_asset_45541dbf34b_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_45541dbf34b_Item0Video
    );

    let video_asset_45541dbf34b_Item0VideoMaterial

      video_asset_45541dbf34b_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_45541dbf34b_Item0VideoTexture,
        })
    
     const video_asset_45541dbf34b = new THREE.Mesh(
      video_asset_45541dbf34b_planeGeometry,
      video_asset_45541dbf34b_Item0VideoMaterial
    );

  video_asset_45541dbf34b.position.set(0, 0, 0);



  if (isIOS) {
    video_asset_45541dbf34b_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_45541dbf34b_Item0Video.loop=true;
  
  video_asset_45541dbf34b.scale.set(1.2, 1.2, 1.2);

    video_asset_45541dbf34b.rotation.set(-0.002, 0, 0);

    
  
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_45541dbf34b_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_6db67eb8_7c3cfdc9) {
        setTimeout(()=>{
          window.location.href = "https://blinkit.com/s/?q=tata%20sampann%20masala"
        },100)
        }
      

      if (o.userData.clickable && o === image_77709c62_94cd5e60) {
        setTimeout(()=>{
          window.location.href = "https://www.flipkart.com/search?q=tata%20samapann%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
        },100)
        }
      

      if (o.userData.clickable && o === image_3b5710c2_b4983e48) {
        setTimeout(()=>{
          window.location.href = "https://www.amazon.in/s?k=tata+sampann+masala&crid=MK2272W8BN6U&sprefix=tata+sampann+Masa%2Caps%2C241&ref=nb_sb_ss_ts-doa-p_1_17"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(image_6db67eb8_7c3cfdc9)
anchor.group.add(image_77709c62_94cd5e60)
anchor.group.add(image_3b5710c2_b4983e48)

anchor.group.add(video_asset_45541dbf34b)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            





     
      video_asset_45541dbf34b_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_45541dbf34b_Item0Video.pause();

        




    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    