1---What are some differences between interfaces and types in TypeScript?

Interface: টাইপস্ক্রিপ্টে Interface বলতে আমরা বুঝি  একটা অবজেক্ট এর  ধরন কি রকম হবে  হবে সেটাই।  অর্থাৎ  অবজেক্ট এর ভিতরের proparty কি string হবে নাকি number হবে,  নাকি  boolean হবে এটাই। এক কথায় বলতে পারি টাইপস্ক্রিপ্টে Interface মানে অবজেক্ট এর নকশা।

 উদাহারন :
interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}
অবজেক্ট :
const user: Person = {
  name: "Hasan",
  age: 22,
  isMarried: false
};

type: Typescript এ type হলো এমন একটা জিনিস যেটা দিয়ে কোনো Object,  Function বা কোনো  primitive  ডাটার জন্য নিজের মতো করে একটা নাম দেওয়া। মানে বারবার একই জিনিস লেখার বদলে একটা নাম দিয়ে পরে সেই নামটাই ব্যবহারা করা। এটাই হলো Type।

উদাহরণ : 
type User ={
name: string ;
age: number ;
isAdmin: boolean ;
}
এখানে User টাকেই বিভিন্ন ডাটার মধ্যে type হিসেবে ব্যবহার করা যায়।

পার্থক্যগুলো:

1/    এখানে interface মুলত  object,  Class,  এবং method structure বর্ণনা করার জন্য ব্যবহার করা হয়। আর type সবকিছুতেই ব্যবহার করা যায়।
2/   Interface কে সহজে extend করা যায়। টাইপকে ও extend করা যায় বাট টাইপের ক্ষেত্রে সীমাবদ্ধতা আছে।
3/  Interface এ Union,  Tuple ব্যবহার করা যায় না।  কিন্তু টাইপে করা যায়।




2/ W hat is the use of the keyof keyword in TypeScript? Provide an example?

KeyOf হলো একটি keyword যা ব্যবহার করে কোনো object এর সব key proparty গুলো ইউনিয়ন টাইপ আকারে পেতে পারি। আসলে কোনো object এর property গুলোর নাম কী কী সেটা এই keyOf আমাদের বলে দেয়।
 উদাহরণ :
  type user = {
     Name: string ;
    age: number ; 
    isMeride: boolean ; 
}
     
 এই keyOf আমরা বিভিন্ন ক্ষেত্রে ব্যবহার করতে পারি।

    ১/ ইউনিয়ন টাইপ তৈরিতে।
    ২/ জেনেটিক্সের সাথে ব্যবহার।
    ৩/ টাইপ সেফটির ক্ষেত্রে।