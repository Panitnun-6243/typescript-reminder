const profile = {
    names: 'John',
    age: 30,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): number {
        return this.age = age;
    }
}

const { age, names }: { age: number, names: string } = profile;
console.log(age, names);//30 John

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;
console.log(lat, lng);
profile.setAge(31);
console.log(profile.age);//31
console.log(age);//30

const { setAge }: { setAge: (age: number) => number } = profile;
const newAge: number = setAge(32);
console.log(newAge);//32