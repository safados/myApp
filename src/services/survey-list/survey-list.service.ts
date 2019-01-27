import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from './../../models/item/item.model';
import { Item2 } from './../../models/item/item.model';
import { Item3 } from './../../models/item/item.model';
import { Item4 } from './../../models/item/item.model';
import { Item5 } from './../../models/item/item.model';
import { Item6 } from './../../models/item/item.model';
import { Item7 } from './../../models/item/item.model';
//this page to connect with DB
//we export ShoppingListService class that uses AngularFireDatabase object
// to do CRUD operations methods:
//getShoppingList(), addsItem(), updateItem(), removeItem().
@Injectable()
export class SurveyListService {

    private surveyListRef = this.db.list<Item>('Questions');
    private surveyListRef2 = this.db.list<Item2>('Questions');
    private surveyListRef3 = this.db.list<Item3>('Questions');
    private surveyListRef4 = this.db.list<Item4>('Questions');
    private surveyListRef5 = this.db.list<Item5>('Questions');
    private surveyListRef6 = this.db.list<Item6>('Questions');
    private surveyListRef7 = this.db.list<Item7>('Questions');
    constructor(private db: AngularFireDatabase) { }

    getSurveyList(){
        return this.surveyListRef;
    }
    
    

    addItem(item: Item){
        return this.surveyListRef.push(item);
    }
    addItem2(item2: Item2){
        return this.surveyListRef2.push(item2);
    }
    addItem3(item3: Item3){
        return this.surveyListRef3.push(item3);
    }
    addItem4(item4: Item4){
        return this.surveyListRef4.push(item4);
    }
    addItem5(item5: Item5){
        return this.surveyListRef5.push(item5);
    }
    addItem6(item6: Item6){
        return this.surveyListRef6.push(item6);
    }
    addItem7(item7: Item7){
        return this.surveyListRef7.push(item7);
    }

}

//thid psge for Data Service
// 3 pages home, add-shopping-item, edit-shopping-item, use ShoppingListService methods
//to interact with Firebase DB and Ionic UI Component to display data.