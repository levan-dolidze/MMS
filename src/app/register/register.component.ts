import { Subscription } from 'rxjs';
import { distributorRegistracionModel } from './../models/distributorRegistrModel';
import { HttpService } from './../services/http.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  toppings: FormGroup;
  recommendatorList: Array<distributorRegistracionModel>
  personalNumber: string;
  paint: any
  isHiddenPhone = true;
  isHiddenMobile = true;
  isHiddenEmail = true;
  isHiddenFax = true;
  IsIdentityShow = true;
  recomendators: Subscription;



  distributorRegistracionForm: FormGroup;
  constructor(private distributorService: HttpService) {

  };

  ngOnInit(): void {
    this.recomendators = this.distributorService.getRegistredDistributors().subscribe((data) => {
      this.recommendatorList = data;
      this.filtredIdNumbers();
      this.setDefaultValues();
    });

    this.createRegistracionForm();
  }

  ngOnDestroy() {

    this.recomendators.unsubscribe()
  }

  createRegistracionForm() {
    this.distributorRegistracionForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      sureName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      birthday: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      identificationDoc: new FormControl(null, Validators.required),
      docSeries: new FormControl(null, Validators.maxLength(10)),
      docNo: new FormControl(null, Validators.maxLength(10)),
      phone: new FormControl(null),
      mobile: new FormControl(null),
      email: new FormControl(null),
      fax: new FormControl(null),
      dateOfIssue: new FormControl(null, Validators.required),
      dateOfExpiry: new FormControl(null, Validators.required),
      personalNo: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      issuingAuth: new FormControl(null, Validators.maxLength(100)),
      contactInfo: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      addressType: new FormControl(),
      address: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      hasRecommender: new FormControl(),
      recomendatorPersonalNo: new FormControl(Validators.required),
      protege: new FormArray([]),
      protegePersonalNo: new FormArray([]),
      fotoUpload: new FormControl(null, Validators.required)
    });

  }

  setDefaultValues() {
    this.distributorRegistracionForm.patchValue({ gender: 'male', identificationDoc: 'IDcard', addressType: 'ActualAddress' });
  }


  addInfo() {

    this.distributorService.getRegistredDistributors().subscribe((data) => {
      this.recommendatorList = data;
      this.filtredIdNumbers();
      this.getRegistrDistrIDnumber();

    });




    const newDistributor: distributorRegistracionModel = {
      name: this.distributorRegistracionForm.get('name').value,
      lastname: this.distributorRegistracionForm.get('sureName').value,
      date: this.distributorRegistracionForm.get('birthday').value,
      gender: this.distributorRegistracionForm.get('gender').value,
      identificationDoc: this.distributorRegistracionForm.get('identificationDoc').value,
      identificationDocSeries: this.distributorRegistracionForm.get('docSeries').value,
      identificationDocNumber: this.distributorRegistracionForm.get('docNo').value,
      dateOfIssue: this.distributorRegistracionForm.get('dateOfIssue').value,
      dateOfExpiry: this.distributorRegistracionForm.get('dateOfExpiry').value,
      IDnumber: this.distributorRegistracionForm.get('personalNo').value,
      phone: this.distributorRegistracionForm.get('phone').value,
      mobile: this.distributorRegistracionForm.get('mobile').value,
      email: this.distributorRegistracionForm.get('email').value,
      fax: this.distributorRegistracionForm.get('fax').value,
      issuingAuthority: this.distributorRegistracionForm.get('issuingAuth').value,
      contactInfo: this.distributorRegistracionForm.get('contactInfo').value,
      addressType: this.distributorRegistracionForm.get('addressType').value,
      address: this.distributorRegistracionForm.get('address').value,
      hasRecommender: this.distributorRegistracionForm.get('hasRecommender').value,
      recomendatorPersonalNo: this.distributorRegistracionForm.get('recomendatorPersonalNo').value,
      protegePersonalNo: this.distributorRegistracionForm.get('protegePersonalNo').value,
      fotoUpload: this.distributorRegistracionForm.get('fotoUpload').value

    };


    this.distributorService.addDistributor(newDistributor).subscribe((data) => {

      alert('distributor added');

    });


  };



  showPhone(event: any) {

    return { phone: this.isHiddenPhone = !this.isHiddenPhone }

  }
  showMobile(event: any) {
    return { mobile: this.isHiddenMobile = !this.isHiddenMobile }

  }
  showEmail(event: any) {
    return { email: this.isHiddenEmail = !this.isHiddenEmail }
  }
  showFax(event: any) {
    return { fax: this.isHiddenFax = !this.isHiddenFax }
  }
  showIdentity(event: any) {
    return { identity: this.IsIdentityShow = !this.IsIdentityShow }
  }




  filtredIdNumbers(): any {
    const filtredLength = this.recommendatorList.filter((item) => {

      return item.protegePersonalNo.length < 3;

    })
    this.getRecommendatorId(filtredLength)
  }

  getRecommendatorId(protegeIdArray: any) {
    const maped = protegeIdArray.map((element: any) => {
      return element.id;
    })
    this.paint = maped;
  }

  getRegistrDistrIDnumber(): any {

    const find = this.recommendatorList.find((item) => {

      return item.id === this.distributorRegistracionForm.get('recomendatorPersonalNo').value;
    });
    // const getId = this.recommendatorList.map((item) => {
    //   return item.id;
    // });

    // const newProtege = getId.length + 1

    if (find) {

      this.recomendators = this.distributorService.getRegistredDistributors().subscribe((data) => {
        this.recommendatorList = data;

        const findId = this.recommendatorList.map((item) => {
          return item.id
        })
        let lastId = findId.pop();
        find.protegePersonalNo.push(lastId);
        this.distributorService.editDistributorProtegeInfo(find).subscribe(() => {

          this.filtredIdNumbers();
        });

      });


    }
    else {
      return
    }

  };


};














