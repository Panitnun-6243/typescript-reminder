var profile = {
    names: 'John',
    age: 30,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        return this.age = age;
    }
};
var age = profile.age, names = profile.names;
console.log(age, names); //30 John
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log(lat, lng);
profile.setAge(31);
console.log(profile.age); //31
console.log(age); //30
var setAge = profile.setAge;
var newAge = setAge(32);
console.log(newAge); //32
