//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract faucet {

    uint256 public balance;
    uint256 public totalDonators;
    uint256 public withdrawTime = 24 hours;
    uint256 public withdrawAmount;

    struct user { 
        address walletAddress;
        bool canWithdraw;
        uint256 paymentAmount;
        uint256 lastWithdrawTime;
    }

    mapping(address => user) public users;

    address public owner;

    constructor() payable {
        balance = 0;
        owner = msg.sender;
        totalDonators = 497;
        withdrawAmount = 50000000000000000;
    }

    function waitTime(uint256 _hours) public onlyOwner {
        withdrawTime = _hours;
    }

    event Deposit(
        address indexed userAddress,
        uint256 transferAmount,
        uint256 contractBalance
    );

    function deposit() public payable {
        balance = balance + msg.value;
        emit Deposit(
            msg.sender,
            msg.value,
            address(this).balance
        );
    }

    event Withdraw(
        address indexed userAddress,
        uint256 transferAmount,
        uint256 contractBalance,
        uint256 totalDonators
    );

    function withdraw(address payable userAddress) public {
        balance = balance - withdrawAmount;
        (bool sent, ) = userAddress.call{value: withdrawAmount}("");
        require(sent, "Failed to send");
        totalDonators = totalDonators + 1;
        emit Withdraw(
            msg.sender,
            withdrawAmount,
            address(this).balance,
            totalDonators
        );
        users[msg.sender].lastWithdrawTime = block.timestamp + withdrawTime;
    }

    modifier onlyOwner() {
        require (msg.sender == owner);
        _;
    }


    function emptyFaucet() public onlyOwner{
        (bool sent, ) = owner.call{value: balance}("");
        require(sent, "Failed to send");
        balance = address(this).balance;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }

    function getTotalDonators() public view returns (uint256) {
        return totalDonators;
    }

    function getFaucetFunds() public view returns (uint256) {
        return address(this).balance;
    }

    function withdrawalAllowed() public view returns (bool) {
        if (users[msg.sender].lastWithdrawTime == 0) {
            return true;
        } else if (block.timestamp >= users[msg.sender].lastWithdrawTime) {
            return true;
        } else {
            return false;
        }
    }
 }

