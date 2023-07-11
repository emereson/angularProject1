import { Component, OnInit ,ViewChild} from '@angular/core';
import { PeopleService } from './people.service';
import { ToastrService } from 'ngx-toastr';
import { AddUpdPersonComponent } from './components/add-upd-person/add-upd-person.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  data: any[] = [];
  person_sel:any;
  @ViewChild('AddUpdPersonComponent') addUpdPerson!:AddUpdPersonComponent;

  constructor(private peopleService: PeopleService,private toastr:ToastrService) {}

  ngOnInit(): void {
    this.llenarData();
    this.toastr.success('Hello world!', 'Toastr fun!')
  }

  llenarData() {
    this.peopleService.peopleData().subscribe((data: any[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
  Editar(p_data:any){
    console.log(p_data);
  }
}
