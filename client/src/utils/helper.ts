

export const validateEmail = (email:string):boolean =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


export const getInitials = (name: string) =>{
    if(!name) return "";

    const words = name.split(" ");
    let initial = '';
    
    for (let i = 0; i < Math.min(words.length, 2); i++){
        initial += words[i][0];
    }

    return initial.toUpperCase();
}