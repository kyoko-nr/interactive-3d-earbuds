// types/three-extend.d.ts

declare module "three/examples/jsm/loaders/GLTFLoader" {
  import {
    Loader,
    LoadingManager,
    Object3D,
    Camera,
    AnimationClip,
  } from "three";

  export interface GLTF {
    scene: Object3D;
    scenes: Object3D[];
    cameras: Camera[];
    animations: AnimationClip[];
  }

  export class GLTFLoader extends Loader<GLTF> {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    setDRACOLoader(dracoLoader: unknown): void;
  }
}

declare module "three/examples/jsm/loaders/DRACOLoader" {
  import { Loader, BufferGeometry } from "three";

  export class DRACOLoader extends Loader<BufferGeometry> {
    constructor();
    setDecoderPath(path: string): this;
    setDecoderConfig(config: Record<string, unknown>): this;
    load(
      url: string,
      onLoad: (geometry: GeneratePrimeOptionsAr) => void,
      onProgress?: (event: BufferGeometry) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
