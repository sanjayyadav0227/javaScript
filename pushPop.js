1.
const shopingCard = ()=>{
    let card = [];
    return {
        addProduct:(prod)=>{
            card.push(prod);
        },
        removeProduct:()=>{
            card.pop();
        },
        displayCard:() => {
            console.log(card);
        }
    }
}
let cards = shopingCard();
cards.addProduct({product:"shoes",price:1589});
cards.addProduct({product:"shirt",price:1082});
cards.displayCard();
cards.removeProduct();
cards.displayCard();
=========================================================================
2.
const Employee = ()=>{
    let employee = [];
    return {
        addEmp:(emp)=>{
            employee.push(emp);
        },
        removeEmp:()=>{
            employee.pop();
        },
        displayEmp:() => {
            console.log(employee);
        }
    }
}
let emp = Employee();
emp.addEmp({empid:1, empName: "rakesh", empSalary:25600});
emp.addEmp({empid:2, empName: "ram", empSalary:29600});
emp.displayEmp();
emp.removeEmp();
emp.displayEmp();
=========================================================================
3.
const post = ()=>{
  let likePost = [];
  return {
    like:(name)=>{
    likePost.push(`${name} liked the post.`)
  },
  display : ()=>{
    console.log(likePost);
  }
  }
}
const pst = post();
pst.like("raman");
pst.display();
pst.like("suresh");
pst.display();
=========================================================================
4.
const movie = ()=>{
  let playList = [];
  let rmvMovie = [];
  return {
    addMovie:(mName)=>{
    playList.push(mName)
  },
  removeMovie:()=>{
    rmvMovie.push(playList.pop());
  },
  displayRmvMve:()=>{
    console.log(rmvMovie);
  },
  display : ()=>{
    console.log(playList);
  }
  }
}
const mve = movie();
mve.addMovie("hera pheri");
mve.display()
mve.addMovie("laxmmi bomb");
mve.display()
mve.removeMovie()
mve.display()
mve.displayRmvMve()

=========================================================================
5.
const attendanceSeet = ()=>{
  let attendanceList = [];
  return {
    present:(sName)=>{
    attendanceList.push(sName)
  },
  display : ()=>{
    console.log(attendanceList);
  }
  }
}
const atndSeet = attendanceSeet();
atndSeet.present("raman");
atndSeet.display();
atndSeet.present("kapil");
atndSeet.display();
=========================================================================
6.
const restaurant = ()=>{
  let orderList = [];
  return {
    addOrder:(sName)=>{
    orderList.push(sName)
  },
    cancelOrder:()=>{
    orderList.pop()
  },
  display : ()=>{
    console.log(orderList);
  }
  }
}
const rstrnt = restaurant();
rstrnt.addOrder("pizza");
rstrnt.addOrder("momos");
rstrnt.display()
rstrnt.cancelOrder()
rstrnt.display()
=========================================================================
7.
const app = ()=>{
    let emergencyContacts = [];
    return {
        addContact:(emp)=>{
            emergencyContacts.push(emp);
        },
        removeContact:()=>{
            emergencyContacts.pop();
        },
        display:() => {
            console.log(emergencyContacts);
        }
    }
}
let contact = app();
contact.addContact({name: "rakesh", phone:9632587410});
contact.addContact({name: "ram", phone:741236980});
contact.display();
contact.removeContact();
contact.display();
=========================================================================
8.
const chatApp = ()=>{
    let msgs = [];
    return {
        addMsg:(emp)=>{
            msgs.push(emp);
        },
        removeMsg:()=>{
            msgs.pop();
        },
        displayMsg:() => {
            console.log(msgs);
        }
    }
}
let chat = chatApp();
chat.addMsg("hey");
chat.displayMsg();
chat.addMsg("hello");
chat.displayMsg();
chat.removeMsg();
chat.displayMsg();
=========================================================================
9.
const book = ()=>{
    let questionBank = [];
    return {
        addQuestion:(emp)=>{
            questionBank.push(emp);
        },
        removeQuestion:()=>{
            questionBank.pop();
        },
        display:() => {
            console.log(questionBank);
        }
    }
}
let qBook = book();
qBook.addQuestion("what is js.");
qBook.display();
qBook.addQuestion("what is dataType.");
qBook.display();
qBook.removeQuestion();
qBook.display();
=========================================================================
10.
const InventoryPortal = ()=>{
    let inventoryList = [];
    return {
        addProduct:(prod)=>{
            inventoryList.push(prod);
        },
        removeProduct:()=>{
            inventoryList.pop();
        },
        display:() => {
            console.log(inventoryList);
        }
    }
}
let inventorys = InventoryPortal();
inventorys.addProduct("Laptop", 10, 55000);
inventorys.addProduct("Headphones", 50, 1500);
inventorys.display();
inventorys.removeProduct();
inventorys.display();
=========================================================================