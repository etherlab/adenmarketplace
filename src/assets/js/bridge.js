

var app= {
    // Default RPC url with port
    defaultRPC: "http://localhost:8545",

    // Listeners
    listeners: function(){
        $('#identity-name').text(web3.eth.accounts[0]);

        //settings:rpcselect
        var rpcselect = $('#rpc-select');
        if(rpcselect.val() == '') rpcselect.val(app.defaultRPC);
        rpcselect.on('focusout', function(){
            app.init($(this).val());
        });

    },

    // Init
    init:function( web3RPC ){

        if(web3RPC != undefined) app.defaultRPC = web3RPC;

        web3 = new Web3(new Web3.providers.HttpProvider( app.defaultRPC ));

        if(!web3.isConnected()) {
            console.log("prout :'(");
        } else {
            console.log("Pas prout :D");
            app.listeners();
        }


    }
};


$(document).ready(function () {
    app.init();
});
