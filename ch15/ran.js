// fetch('https://quotes.toscrape.com/random')
//     .then((response) => response.text())
//     .then((body) => {
//         console.log(body);
//     }); 

    async function someFun () {

        await fetch('https://quotes.toscrape.com/random')
        console.log("Finished fetching")
        await "yes2"
        console.log("Func 1 second await")
        await "yes3"
        console.log("Func 1 third await")
    }

    async function someFun2 () {

        await "yes"
        console.log("Func 2 first await")
        await "yes2"
        console.log("Func 2 second await")
        await "yes3"
        console.log("Func 2 third await")
    }

    async function someFun3 () {

        await "yes"
        console.log("Func 3 first await")
        await "yes2"
        console.log("Func 3 second await")
        await "yes3"
        console.log("Func 3 third await")
    }

    async function func4(){

      await  someFun()
        someFun2()
        someFun3()
    }
    // someFun()
    // someFun2()
    // someFun3()
     func4()