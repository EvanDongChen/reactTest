import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './UnityGame.css'; // Adjust the path based on where your CSS file is located


function UnityGame() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Build/webtest3.loader.js",
    dataUrl: "/unity/Build/webtest3.data",
    frameworkUrl: "/unity/Build/webtest3.framework.js",
    codeUrl: "/unity/Build/webtest3.wasm",
  });

  return (
    <div className="unity-container">
      {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
      <Unity unityProvider={unityProvider} className="unity-game" />
    </div>
  );
}

export default UnityGame;
