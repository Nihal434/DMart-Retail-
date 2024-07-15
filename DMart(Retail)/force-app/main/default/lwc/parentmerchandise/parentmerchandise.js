// Here we defined the parent controller in this controller we are getting detais entered by user 
// through event.detail of customEvent
// After getting all the detail we are iterating on event.detail to get all the required information
// and adding that information to searchDetails array inside handlemerchandisedata method now we are going to
// pass this data to next child which is a displayMerchandise to display the data
import { LightningElement } from 'lwc';

export default class Parentmerchandise extends LightningElement {
    searchDetails=[];
    handlemerchandisedata(event){
        this.searchDetails = [];
        // alert("call from parent");
        try{
            event.detail.forEach(x=>{
                var merData = {
                    id:x.Id,
                    name:x.Name,
                    desc:x.Merchandise_Desc__c,
                    stock:x.Merchandise_Stock__c,
                    price:x.Merchandise_Price__c
                }
                this.searchDetails.push(merData);
            })
        }catch(e){
            console.log(e);
        }
    }
}