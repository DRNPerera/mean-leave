import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, NavigationExtras } from "@angular/router";
import { Users } from '../../services/user';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
   
  users: Users[];
  
  full_name:String;
  phone:String;
  username:String;
  email:String;
  password:String;
  state:String;

  post:String;

  constructor(

      private authService:AuthService,
      private flashMessage:FlashMessagesService,
      private router:Router

  ) { }

  ngOnInit() {

      this.authService.getAllUsers().subscribe(user=>{
          this.users = user;

      })
  }

   registerData(){
    
    this.checkPost();
    const user = {
       full_name:this.full_name,
       post:this.post,
       phone:this.phone,
       username:this.username,
       email:this.email,
       password:this.password,
       state:this.state
    };

    this.authService.registerUser(user).subscribe(user=>{
         this.users.push(user);
         this.authService.getUser().subscribe(user=>{
             this.users = user;
         }); 
    });   
  
  }

  checkPost(){
     if(this.state == '0'){
        this.post = 'head';
     }else if(this.state == '1'){
        this.post = 'admin';
     }else if(this.state == '2'){
        this.post = 'staff';
     }

  }

  deleteUser(id:any)
  {
    var user = this.users;
    this.authService.deleteUser(id).subscribe(data =>{
            if(data.n==1)
            {
              for(var i =0; i< user.length; i++)
              {
                if(user[i]._id == id)
                {
                   user.splice(i,1);
                }
              }
            }
        })
  }

   updateUser(id:any){
       let navigationExtras: NavigationExtras = {
            queryParams: {
                "id": id
            }
        };
        this.router.navigate(["/updateUser"], navigationExtras);  
  }


}
