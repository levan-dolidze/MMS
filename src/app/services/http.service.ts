import { DistributorsIdentityModel } from './../models/registredDistributors';
import { distributorRegistracionModel } from './../models/distributorRegistrModel';
import { ProductCodsAndNamesModel } from './../models/productCodsAndNames';
import { DistributorSalesModel } from './../models/distributorSales';
import { productRegistrModel } from './../models/productRegistr';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  apiUrlProducts = environment.apiUrlProduct;
  apiUrlDistrSales = environment.apiUrlDistrSales;
  apiUrlProductCodes = environment.apiUrlProductCodes;
  apiUrlDistributors = environment.apiUrlDistributors;
  apiUrlDistributorsIdentity = environment.apiUrlDistributorsIdentity;

  constructor(private httpProducts: HttpClient, private httpDistrSales: HttpClient, private httpPoructAndCode: HttpClient, private httpDistributors: HttpClient, private httpDistrIdentityInfo: HttpClient) { }


  getProducts(): Observable<Array<productRegistrModel>> {
    return this.httpProducts.get<Array<productRegistrModel>>(this.apiUrlProducts);

  };
 
  addProducts(product: productRegistrModel) {
    return this.httpProducts.post<Array<productRegistrModel>>(this.apiUrlProducts, product);
  };

  getDistrSalesInfo(): Observable<Array<DistributorSalesModel>> {
    return this.httpDistrSales.get<Array<DistributorSalesModel>>(this.apiUrlDistrSales);
  };

  addDistrSalesInfo(salesInfo: DistributorSalesModel) {
    return this.httpDistrSales.post<Array<productRegistrModel>>(this.apiUrlDistrSales, salesInfo);
  };


  getProductNameAndCode(): Observable<Array<ProductCodsAndNamesModel>> {
    return this.httpPoructAndCode.get<Array<ProductCodsAndNamesModel>>(this.apiUrlProductCodes);
  };

  getRegistredDistributors(): Observable<Array<distributorRegistracionModel>> {
    return this.httpDistributors.get<Array<distributorRegistracionModel>>(this.apiUrlDistributors);
  };

  addDistributor(distributor: distributorRegistracionModel) {
    return this.httpDistributors.post<Array<distributorRegistracionModel>>(this.apiUrlDistributors, distributor);
  };

  editDistributorProtegeInfo(statement: distributorRegistracionModel): Observable<distributorRegistracionModel> {
    return this.httpDistributors.put<distributorRegistracionModel>(`${this.apiUrlDistributors}/${statement.id}`, statement);
  };
  deleteDistributorOldData(id: any) {
    return this.httpDistributors.delete(`${this.apiUrlDistributors}/${id}`)
  };

  getDistributorsIdentityInfo(): Observable<Array<DistributorsIdentityModel>> {
    return this.httpDistrIdentityInfo.get<Array<DistributorsIdentityModel>>(this.apiUrlDistributorsIdentity);
  };

  editDistributorFromList(statement: distributorRegistracionModel) {
    return this.httpDistributors.put<distributorRegistracionModel>(`${this.apiUrlDistributors}/${statement.id}`, statement)
  };

  deleteDistributorFromList(id: any) {
    return this.httpDistributors.delete(`${this.apiUrlDistributors}/${id}`)
  };

};



