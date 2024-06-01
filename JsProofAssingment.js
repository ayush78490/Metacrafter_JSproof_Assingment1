/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTstudents = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function Student_mintNFT (name, branch, uid, year, achivement) {
    let NFT = {
        name: name,
        branch: branch,
        uid: uid,
        year: year,
        achivement: achivement
    }
    NFTstudents.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function Students_listNFTs () {
    for (let i = 0; i < NFTstudents.length; i++) {
        console.log("\n\n_________ Best Students ________\n\n" );
        console.log("Name: " + NFTstudents[i].name);
        console.log("Branch: " + NFTstudents[i].branch);
        console.log("UID: " + NFTstudents[i].uid);
        console.log("Year: " + NFTstudents[i].year);
        console.log("Achivement: " + NFTstudents[i].achivement);
        
        console.log("\n\n_____________________________________\n" );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs  Minted do Far " + NFTstudents.length);

}

// call your functions below this line
Student_mintNFT("Aryan", "Computer Science", "23bcs80059", 2026, "Best student 2023");
Student_mintNFT("Gurshbad", "Computer Science", "23bcs80061", 2026, "Best student 2023");
Student_mintNFT("Harshit", "Computer Science", "23bcs80068", 2026, "Best student 2023");
Student_mintNFT("Ayush", "Computer Science", "23bcs80070", 2026, "Best student 2023");
Students_listNFTs();
getTotalSupply();