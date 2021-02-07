import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

@Injectable()
export class FormConfigService {
  readonly BASEURL = 'src/assets/json/';

  constructor(private http: HTTP) { }

  public getFormConfig(filename): Promise<HTTPResponse> {    
    return this.http.get(this.BASEURL + filename, {}, {});
  }
}
