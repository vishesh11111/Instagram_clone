const app = require("./app");
const {connectDataBase} = require("./configs/db")

connectDataBase();

app.listen(process.env.PORT, ()=>{
    console.log(`server is ruuning port ${process.env.PORT}`)
});