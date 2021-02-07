import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from 'src/common/forms/control-base';
import { ControlsService } from 'src/common/forms/controls.service';
import { FormConfigService } from 'src/services/form-config.service';
import { AlertController } from '@ionic/angular';
import { ControlDescriptor } from 'src/common/forms/control';

@Component({
	templateUrl: 'planner.page.html',
  	styleUrls: [ './planner.page.scss' ],
	providers: [FormConfigService, ControlsService]
})
export class PlannerPage {
	controls: ControlBase<any>[];
	form: FormGroup;
	submitted: any;
	readonly FILENAME = 'trip-planner-form.json';

	constructor(
		public configService: FormConfigService,
		public controlsService: ControlsService,
		public alertCtrl: AlertController
	) {
		this.form = new FormGroup({});
	}

	ionViewWillEnter() {

		this.configService.getFormConfig(this.FILENAME)
			.then(res => {
				const controls: ControlDescriptor[] = JSON.parse(res.data);
				this.controls = this.controlsService.getControls(controls);
			})
			
		this.form.valueChanges
			.subscribe(val => {
				this.submitted = val;
			});
	}

	async submitForm($event){

		const alert = await this.alertCtrl.create({
			header: 'Success!',
      		subHeader: 'Your form was successfully submitted!',
      		buttons: ['OK']
		});
	
    	await alert.present();
		console.log("Success\n", this.submitted);
	}

}
