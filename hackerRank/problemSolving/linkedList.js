// * Day 15 of 30 Days of Code --> Linked List!

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data){
    this.data=data;
    this.next=null;
}

// ****** ignore above ******* 

function Solution(){

	this.insert = function(head, data) {
    //complete this method
    let node = new Node(data);

    if (!head) {
        head = node;
    } else {
        let current = head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = node;
    }

    return head;
};
	this.display = function(head) {
        let start = head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}

// **** ignore below ****

function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}		