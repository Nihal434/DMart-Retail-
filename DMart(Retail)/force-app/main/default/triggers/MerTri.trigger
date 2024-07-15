trigger MerTri on Merchandise__c (before delete) {
if(Trigger.isBefore && Trigger.isDelete){
MerchandiseTrigger.insertMer(Trigger.old);
}

}