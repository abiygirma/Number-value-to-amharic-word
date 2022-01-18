/*
 * @author	Abiy Girma Desta
 * @email	abiysemail@gmail.com
 * @created	2020-01-24
 * @updated	2020-01-25
 * @version	Build V1.0.1
 */

if(typeof(String.prototype.trim) != 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

function readInAmharicThreeDigite(threeDigiteValue)
{
	var baseOne = new Array();

	baseOne[0]='';
	baseOne[1]='አንድ';
	baseOne[2]='ሁለት';
	baseOne[3]='ሦስት';
	baseOne[4]='አራት';
	baseOne[5]='አምስት';
	baseOne[6]='ስድስት';
	baseOne[7]='ሰባት';
	baseOne[8]='ስምንት';
	baseOne[9]='ዘጠኝ';
	
	var baseTen = new Array();
	baseTen[0]='';
	baseTen[1]='አስራ';
	baseTen[2]='ሃያ';
	baseTen[3]='ሠላሳ';
	baseTen[4]='አርባ';
	baseTen[5]='አምሳ';
	baseTen[6]='ስድሳ';
	baseTen[7]='ሰባ';
	baseTen[8]='ሰማንያ';
	baseTen[9]='ዘጠና';
	
	var ten = 'አስር';
	
	var strAmharicValue = '';
	var numberLength = threeDigiteValue.length;
	
	var base = 1;
	var previousNumber = '';
	
	for(var i = 1; i <= numberLength; i++)
	{
		var currentNumber = threeDigiteValue.substr(numberLength - i, 1);
		
		if(base == 1)
		{
			strAmharicValue = baseOne[currentNumber];
		}
		else if((base == 2) && (currentNumber != 0))
		{
			strAmharicValue = baseTen[currentNumber] + ' ' + strAmharicValue;
			if((previousNumber == '0') && (currentNumber == 1))
				strAmharicValue = ten;
		}
		else if((base == 3) && (currentNumber != 0))
		{
			strAmharicValue = baseOne[currentNumber] + ' መቶ ' + strAmharicValue;
		}
		previousNumber = currentNumber;
		base++;
	}
	
	return (strAmharicValue);
}

function readInAmharic(value)
{
	var bigNumber = new Array();
	
	bigNumber[0] = '';
	bigNumber[1] = 'ሺህ';
	bigNumber[2] = 'ሚሊዮን';
	bigNumber[3] = 'ቢሊዮን';
	bigNumber[4] = 'ትሪሊዮን';
	bigNumber[5] = 'ኳትሪሊዮን';	
	
	var strAmharicValue = '';
	var numberLength = value.length;
	
	var bigNumberIndex = 0;
	
	var i = 1;
	for(i = 1; i <= numberLength; )
	{
		var currentNumber = '';
		for(var length = 1; (i <= numberLength) && (length <=3); length++)
		{
			currentNumber = value.substr(numberLength - i, 1) + currentNumber;
			i++;
		}
		if(currentNumber > 0)
		{
			var newNumber = readInAmharicThreeDigite(currentNumber) + ' ' + bigNumber[bigNumberIndex] + ' ' + strAmharicValue;
			strAmharicValue =  newNumber;
		}
			
		bigNumberIndex++;
	}
	
	return strAmharicValue.trim();
}
