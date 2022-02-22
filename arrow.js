
class student{
    static count=0;
   constructor(name,age,phone,marks){
      this.name=`${name}`;
      this.age=`${age}`;
      this.phone=`${phone}`;
      this.marks=`${marks}`;
      student.countStudent();
    }
    static countStudent(){
     return(student.count++);    
  
  }
     setPlacementAge(minPlacementAge) {
      return (minmarks)=>{
          if(this.marks>minmarks && this.age>minPlacementAge)
          {
              console.log(`${this.name} is eligible`)
          }
          else
          console.log(`${this.name} is not eligible`)
      }
    }
  }
  const Ritesh= new student('Ritesh',32,9438671281,88);
  const Satish= new student('Satesh',22,9438625555,38);
  const Rounak= new student('Rounak',20,123456789,98);
  const Pooja = new student('Pooja',28,9861123451,30);
  const Sachin= new student('Sachin',32,9040886281,44);
  console.log(student.countStudent());
   Ritesh.setPlacementAge(18)(40);
   Satish.setPlacementAge(18)(40);
   Rounak.setPlacementAge(18)(40);
   Pooja.setPlacementAge(18)(40);
   Sachin.setPlacementAge(18)(40);
