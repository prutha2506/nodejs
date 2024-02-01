var adminmodel=require('../model/adminmodel')
var login=0;



exports.get_date =async (req,res)=>{
    var admin_data =await adminmodel.find();
    res.status(200).json({
        admin_data
    })
}



exports.insert=async(req,res)=>{
    var b_pass = await bcrypt.hash(req.body.password,10);

    req.body.password=b_pass;
    var admin_data =await adminmodel.create(req.body);

    res.status(200).json({
        
        admin_data
        
    })
}

exports.login=async(req,res)=>{

    var admindata =await adminmodel.find({"email":req.body.email});

    console.log(admindata); 
    
        if(admindata.length==1){
    
            bcrypt.compare ( req.body.password, admindata[0].password, async function(err, result) {
    
                console.log(admindata);
    
                if(result == true){
                
                login=1;

                res.status(200).json({
                    status:"login",
                   
                })
            }else{
               
                res.status(200).json({
                    status:"check your email and password"
                })
            }
           
        });
    }else{
        res.status(200).json({
            status:"check your email ana password"
        })
    }

}

exports.logout = async (req, res) => {
    await storage.clear();

    return res.status(200).json({
        status: "user logout",
        
    });
};

