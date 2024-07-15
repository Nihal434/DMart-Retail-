public class StockSearch {
    @auraenabled(cacheable=true)
    public static List<Merchandise__c> getAllMerchandiseByStock(Integer mStock){
    Integer merStock = mStock  ;
    List<Merchandise__c> mer = [select id,Name,Merchandise_Stock__c,Merchandise_Price__c,Merchandise_Desc__c from Merchandise__c where Merchandise_Stock__c =: merStock];
    return mer;
}
}