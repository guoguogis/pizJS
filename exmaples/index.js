 ;
 // 应用主逻辑
 define(function(require,exports){

    var piz = require('../src/piz.js');

     window.Person = piz.CLASS({
            name:'guoguogis',
            age: 20,
            job: 'FE',

            getName:function(){
                return name;
            },
            setName:function(nameStr){
                this.name = nameStr
            },

            initialize:function(){

            }
        });

    var per1 = new Person();

    console.log(per1);
 });

