// Function A
function parent(arg1, arg2) {
    let name = "gaurav";
    let age = 24;
}

    function print(){
    console.log(name, age);
    }

    // Function B
    function print(){
    console.log(name, age); // Error : name, age variable not defined.
    }

    parent()
    print()
    // parent()