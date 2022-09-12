import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClothingService } from 'src/app/shared/services/Clothing.service';

import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent implements OnInit {
  @Output() submitImage: EventEmitter<WebcamImage> =
    new EventEmitter<WebcamImage>();
  imageAlt = 'src/assets/imagesnewclo/iphone.png';

  constructor(public route: Router, private clothingService: ClothingService) {}

  //@Output() submitImage:EventEmitter<WebcamImage>=new EventEmitter<WebcamImage>();

  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string = '';
  public imageName: string = '';
  public imageFormat: any;
  public isTakenASnapshot:boolean=false;

  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage | null = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
  >();

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );
    this.isTakenASnapshot=false;

  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.isTakenASnapshot=true;
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }
  randomInteger() {
    return Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
  }
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    const arr = this.webcamImage.imageAsDataUrl.split(',');
    //const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const arr2=arr[0].split(':')
    const arr3=arr2[1].split(';')

    const file: File = new File([u8arr], `${this.randomInteger()}.png`, {
      type:arr3[0],
    });
    this.clothingService.fileToUpload=file;
    console.log(file);
  }
  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
  saveImage() {
    this.submitImage.emit(this.webcamImage!);
    this.clothingService.webcamImage=this.webcamImage!;
    this.route.navigate(['/add-cloth']);
  }
}
