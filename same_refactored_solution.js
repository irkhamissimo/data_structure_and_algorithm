function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1lvl;VideoColorSpace, bbbl;blbbb.;;.b lbl bl;b;llb;lb;blllb lb l;l bll l ,,;b ,l b,l b b;l;b ll,;l,;l,;l,;l;,l,,l,l l,,,, , b, bl,  ,, l, ll,n,ln]gl;,']n;;n ;n ;nn;n,ln;ln l,n l;l n][ n;ln;n l][plnn[b;[;bn';p[;BigInt;nnl[nl[npln[nl[;[pnpln[plnp[ln]p[l]plnpl[nl[p aggyygghuisuvgh uvgsdsgsdygususgyftgyuuhygduygygygyuayusy]]]]]]]]]
        // console.log(frequencyCounter1[val])
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    // console.log(frequencyCounter1);
    // console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        console.log(key)
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3,2,5], [1,4,9,4,25]))
