import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Menu } from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgHamburger = "assets/images/hamburger.jpg";
  imgPizza = "assets/images/pizza-mexique.jpg";

  formValue !: FormGroup;
  menuModelObj: Menu = new Menu();
  menuData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private fromBuilder: FormBuilder, private menu: MenuService) { }

  ngOnInit(): void {
    this.formValue = this.fromBuilder.group({
      titre : [''],
      description : [''],
      image : [''],
      prix : ['']
    });
    this.getAllMenu();
  }

  addMenuDetails(){
    this.menuModelObj.titre = this.formValue.value.titre;
    this.menuModelObj.description = this.formValue.value.description;
    this.menuModelObj.image = this.formValue.value.image;
    this.menuModelObj.prix = this.formValue.value.prix;

    this.menu.addMenu(this.menuModelObj)
    .subscribe(res => {
      console.log(res);
      alert('Menu added successfilly');
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'Employee added',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllMenu();
    },
    error => {
      // alert('Something went wrong');
      console.log(error);
    });
  }

  getAllMenu(){
    this.menu.getMenu()
    .subscribe(res => {
      this.menuData = res;
    }, error => {
      console.log(error);
    });
  }

}
