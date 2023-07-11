import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-upd-person',
  templateUrl: './add-upd-person.component.html',
  styleUrls: ['./add-upd-person.component.css']
})
export class AddUpdPersonComponent {

  formPerson: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.formPerson = this.fb.group({
      nom_per: [''],
      pat_per: [''],
      mat_per: [''],
      nro_doc: [''],
      fch_nac: [''],
      img_per: ['']
    });
  }

  async  submit(data: any): Promise<void> {
    const url = 'http://localhost:3000/people';

    const formData = new FormData();
    formData.append('nom_per', data.nom_per);
    formData.append('pat_per', data.pat_per);
    formData.append('mat_per', data.mat_per);
    formData.append('nro_doc', data.nro_doc);
    formData.append('fch_nac', data.fch_nac);
    if (this.selectedFile) {
      formData.append('img_per', this.selectedFile);
    }

    try {
      const res = await this.http.post(url, formData).toPromise();
      console.log(res);
      this.toastr.success('Se registró exitosamente');
    } catch (err) {
      console.log(err);
    }
        
  }

  onFileSelect(event: any): void {
    this.selectedFile = event?.target?.files?.[0] || null;
  }

  

}
