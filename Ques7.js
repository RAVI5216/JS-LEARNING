/*For a given array with prices of 5 itmes [250,65,300,900,50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.*/
let realprice=[250,65,300,900,50];
let OfferPrice=[];
for (let i=0;i<realprice.length;i++)
{
    OfferPrice=realprice[i]-(realprice[i]*10/100);
    console.log(`the offered price is:${OfferPrice}`);
}
