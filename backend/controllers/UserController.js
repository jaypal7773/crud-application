const User = require("../models/User");
class UserController {
    getData(id){
        return new Promise(
            async (res,rej) => {
                try{
                    let user = null;
                    if (id != null || id != undefined) {
                        user = await User.findOne({ _id: req.params.id })
                    } else {
                        user = await User.find()
                    }
                    res({
                        status: 1,
                        user
                    })
                }catch (error){
                    rej({
                        status:0,
                        msg:"Internal server error"
                    })
                }
            }
        )
    }

    create(data) {
        return new Promise(
            (res,rej) => {
                try{
                    const user = new User(data)
                    user.save()
                        .then(
                            (success) => {
                                res({
                                    msg: "user create",
                                    status: 1
                                })
                            }
                        ).catch(
                            (error) => {
                                rej({
                                    msg: "user not create",
                                    status: 0
                                })
                            }
                        )
                }catch (err){
                    rej({
                        msg:"Internal server error",
                        status:0
                    })
                }
            }
        )
    }

    delete(id){
        return new Promise(
            (res,rej) => {
                try{
                    User.deleteOne({_id : id})
                    .then(
                        (succes) => {
                            res({
                                msg:"User deteted",
                                status:1
                            })
                        }
                    ).catch(
                        (error) => {
                            rej({
                                msg:"user not deleted",
                                status:0
                            })
                        }
                    )
                }catch{
                    rej({
                        msg:"Internal server error",
                        status:0
                    })
                }
            }
        )
    }

    update(id,data){
        (res,rej) => {
            try{
                User.updateOne({_id : id} , 
                    data
                    ).then(
                        (success) => {
                            res({
                                msg:"user update",
                                status:1
                            })
                        }
                    ).catch(
                        (error) => {
                            rej({
                                msg:"user not update",
                                status:0
                            })
                        }
                    )
            }catch{
                rej({
                    msg:"internal server error",
                    status:0
                })
            }
        }
    }
}

module.exports = UserController;