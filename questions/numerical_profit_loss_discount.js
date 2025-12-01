// questions/profit_loss_discount.js
// ==========================================
// NUMERICAL – PROFIT, LOSS & DISCOUNT (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["profit_loss_discount"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – Direct Formulas)
  // ==========================================
  beginner: [
    // 1-10: Simple Profit
    {
      question: "A vendor bought a shirt for ₱150 and sold it for ₱200. How much is the profit?",
      options: ["₱30", "₱40", "₱50", "₱60"],
      answer: "₱50",
      explanation: "Profit = Selling Price - Cost Price. 200 - 150 = 50."
    },
    {
      question: "A bag costs ₱300 to manufacture. It is sold for ₱450. What is the gain?",
      options: ["₱100", "₱120", "₱150", "₱200"],
      answer: "₱150",
      explanation: "Gain = SP - CP. 450 - 300 = 150."
    },
    {
      question: "John bought a pen for ₱10 and sold it for ₱15. What is his profit?",
      options: ["₱2", "₱5", "₱7", "₱10"],
      answer: "₱5",
      explanation: "Profit = 15 - 10 = 5."
    },
    {
      question: "An item was bought for ₱80 and sold for ₱100. Calculate the profit.",
      options: ["₱10", "₱15", "₱20", "₱25"],
      answer: "₱20",
      explanation: "Profit = 100 - 80 = 20."
    },
    {
      question: "Cost Price = ₱500, Selling Price = ₱650. Find the profit.",
      options: ["₱100", "₱150", "₱200", "₱250"],
      answer: "₱150",
      explanation: "Profit = 650 - 500 = 150."
    },
    {
      question: "A toy was bought for ₱120 and sold for ₱180. Profit is:",
      options: ["₱40", "₱50", "₱60", "₱70"],
      answer: "₱60",
      explanation: "Profit = 180 - 120 = 60."
    },
    {
      question: "Buying price is ₱25, Selling price is ₱40. Gain is:",
      options: ["₱10", "₱15", "₱20", "₱25"],
      answer: "₱15",
      explanation: "Gain = 40 - 25 = 15."
    },
    {
      question: "A merchant gains ₱30 on an item he bought for ₱70. What is the SP?",
      options: ["₱90", "₱100", "₱110", "₱120"],
      answer: "₱100",
      explanation: "SP = CP + Profit. 70 + 30 = 100."
    },
    {
      question: "If Profit is ₱20 and CP is ₱80, what is SP?",
      options: ["₱60", "₱80", "₱100", "₱120"],
      answer: "₱100",
      explanation: "SP = CP + Profit. 80 + 20 = 100."
    },
    {
      question: "Desired profit is ₱200. Cost is ₱1000. What is the Selling Price?",
      options: ["₱1100", "₱1200", "₱1300", "₱1400"],
      answer: "₱1200",
      explanation: "SP = 1000 + 200 = 1200."
    },

    // 11-20: Simple Loss
    {
      question: "A mug was bought for ₱100 and sold for ₱80. What is the loss?",
      options: ["₱10", "₱20", "₱30", "₱40"],
      answer: "₱20",
      explanation: "Loss = CP - SP. 100 - 80 = 20."
    },
    {
      question: "Bought for ₱500, Sold for ₱450. Loss is:",
      options: ["₱25", "₱50", "₱75", "₱100"],
      answer: "₱50",
      explanation: "Loss = 500 - 450 = 50."
    },
    {
      question: "CP = ₱1,200, SP = ₱1,000. Calculate the loss.",
      options: ["₱100", "₱150", "₱200", "₱250"],
      answer: "₱200",
      explanation: "Loss = 1200 - 1000 = 200."
    },
    {
      question: "A phone case cost ₱200 but was sold for ₱150. Loss?",
      options: ["₱25", "₱50", "₱75", "₱100"],
      answer: "₱50",
      explanation: "Loss = 200 - 150 = 50."
    },
    {
      question: "If Loss is ₱10 and SP is ₱40, what was the Cost Price?",
      options: ["₱30", "₱40", "₱50", "₱60"],
      answer: "₱50",
      explanation: "CP = SP + Loss. 40 + 10 = 50."
    },
    {
      question: "Sold for ₱90, Loss was ₱10. Find CP.",
      options: ["₱80", "₱90", "₱100", "₱110"],
      answer: "₱100",
      explanation: "CP = 90 + 10 = 100."
    },
    {
      question: "A fruit seller lost ₱50 on a basket sold for ₱450. Cost was?",
      options: ["₱400", "₱450", "₱500", "₱550"],
      answer: "₱500",
      explanation: "CP = 450 + 50 = 500."
    },
    {
      question: "A damaged item sold for ₱300 with a loss of ₱100. Original price?",
      options: ["₱200", "₱300", "₱400", "₱500"],
      answer: "₱400",
      explanation: "CP = 300 + 100 = 400."
    },
    {
      question: "Loss is ₱5. CP is ₱25. Find SP.",
      options: ["₱20", "₱25", "₱30", "₱35"],
      answer: "₱20",
      explanation: "SP = CP - Loss. 25 - 5 = 20."
    },
    {
      question: "Cost is ₱60. Loss is ₱15. Selling Price is?",
      options: ["₱35", "₱45", "₱55", "₱75"],
      answer: "₱45",
      explanation: "SP = 60 - 15 = 45."
    },

    // 21-30: Simple Discount
    {
      question: "Marked Price = ₱1,000. Discount = ₱200. Selling Price?",
      options: ["₱700", "₱800", "₱900", "₱1000"],
      answer: "₱800",
      explanation: "SP = MP - Discount. 1000 - 200 = 800."
    },
    {
      question: "A shirt is tagged ₱500. A discount of ₱50 is given. SP?",
      options: ["₱400", "₱450", "₱500", "₱550"],
      answer: "₱450",
      explanation: "SP = 500 - 50 = 450."
    },
    {
      question: "List price is ₱250. Sold for ₱200. Discount amount?",
      options: ["₱25", "₱50", "₱75", "₱100"],
      answer: "₱50",
      explanation: "Discount = MP - SP. 250 - 200 = 50."
    },
    {
      question: "MP = ₱100. SP = ₱90. Discount?",
      options: ["₱5", "₱10", "₱15", "₱20"],
      answer: "₱10",
      explanation: "Discount = 100 - 90 = 10."
    },
    {
      question: "A discount of ₱30 is given on an item marked ₱300. SP?",
      options: ["₱250", "₱270", "₱280", "₱290"],
      answer: "₱270",
      explanation: "SP = 300 - 30 = 270."
    },
    {
      question: "Tag price is ₱1,500. Discount is ₱300. What is the SP?",
      options: ["₱1,000", "₱1,100", "₱1,200", "₱1,300"],
      answer: "₱1,200",
      explanation: "SP = 1500 - 300 = 1200."
    },
    {
      question: "Sold for ₱800 after ₱200 discount. MP was?",
      options: ["₱600", "₱800", "₱1000", "₱1200"],
      answer: "₱1000",
      explanation: "MP = SP + Discount. 800 + 200 = 1000."
    },
    {
      question: "SP is ₱45. Discount was ₱5. Tag price?",
      options: ["₱40", "₱45", "₱50", "₱55"],
      answer: "₱50",
      explanation: "MP = 45 + 5 = 50."
    },
    {
      question: "A store gives ₱10 off on a ₱110 item. Price to pay?",
      options: ["₱90", "₱100", "₱110", "₱120"],
      answer: "₱100",
      explanation: "SP = 110 - 10 = 100."
    },
    {
      question: "Marked price ₱80, sold for ₱72. Discount?",
      options: ["₱6", "₱8", "₱10", "₱12"],
      answer: "₱8",
      explanation: "Discount = 80 - 72 = 8."
    },

    // 31-40: Basic Definitions & Logic
    {
      question: "Formula for Profit?",
      options: ["SP - CP", "CP - SP", "SP + CP", "SP / CP"],
      answer: "SP - CP",
      explanation: "Profit is the excess of Selling Price over Cost Price."
    },
    {
      question: "Formula for Loss?",
      options: ["SP - CP", "CP - SP", "CP + SP", "CP / SP"],
      answer: "CP - SP",
      explanation: "Loss is the excess of Cost Price over Selling Price."
    },
    {
      question: "Which price includes the discount?",
      options: ["Cost Price", "Marked Price", "Selling Price", "Profit"],
      answer: "Marked Price",
      explanation: "The discount is deducted from the Marked Price."
    },
    {
      question: "The amount paid by the customer is called:",
      options: ["Cost Price", "Marked Price", "Selling Price", "List Price"],
      answer: "Selling Price",
      explanation: "Selling Price is the final amount paid."
    },
    {
      question: "If SP = CP, what is the result?",
      options: ["Profit", "Loss", "Break-even", "Discount"],
      answer: "Break-even",
      explanation: "No profit and no loss is called Break-even."
    },
    {
      question: "Overhead expenses are usually added to:",
      options: ["Selling Price", "Cost Price", "Marked Price", "Discount"],
      answer: "Cost Price",
      explanation: "Total Cost = Purchase Price + Overheads."
    },
    {
      question: "Net Price is another name for:",
      options: ["Cost Price", "Selling Price", "Marked Price", "List Price"],
      answer: "Selling Price",
      explanation: "Net Price is the price after deductions (SP)."
    },
    {
      question: "A negative profit is called:",
      options: ["Gain", "Loss", "Discount", "Markup"],
      answer: "Loss",
      explanation: "If profit calculation yields a negative number, it is a loss."
    },
    {
      question: "Markup is added to CP to get:",
      options: ["Selling Price", "Marked Price", "Discount", "Loss"],
      answer: "Selling Price",
      explanation: "Or Marked Price depending on context, but usually sets the listing price."
    },
    {
      question: "Profit is calculated on:",
      options: ["Selling Price", "Cost Price", "Marked Price", "None"],
      answer: "Cost Price",
      explanation: "Profit % is based on Cost Price unless stated otherwise."
    },

    // 41-50: Simple Mixed
    {
      question: "Buy at ₱300, Overhead ₱50, Sell at ₱400. Profit?",
      options: ["₱50", "₱100", "₱150", "₱200"],
      answer: "₱50",
      explanation: "Total CP = 300 + 50 = 350. Profit = 400 - 350 = 50."
    },
    {
      question: "Buy ₱500, Repair ₱100, Sell ₱550. Loss?",
      options: ["₱25", "₱50", "₱75", "₱100"],
      answer: "₱50",
      explanation: "Total CP = 600. Loss = 600 - 550 = 50."
    },
    {
      question: "Cost ₱10, Markup ₱5. SP?",
      options: ["₱10", "₱12", "₱15", "₱20"],
      answer: "₱15",
      explanation: "SP = 10 + 5 = 15."
    },
    {
      question: "A dozen pens cost ₱120. SP of one pen to break even?",
      options: ["₱10", "₱12", "₱15", "₱20"],
      answer: "₱10",
      explanation: "120 / 12 = 10."
    },
    {
      question: "Cost ₱80. Profit desired ₱20. SP?",
      options: ["₱90", "₱100", "₱110", "₱120"],
      answer: "₱100",
      explanation: "80 + 20 = 100."
    },
    {
      question: "Tag ₱200. Discount ₱20. Customer pays?",
      options: ["₱180", "₱190", "₱200", "₱220"],
      answer: "₱180",
      explanation: "200 - 20 = 180."
    },
    {
      question: "Bought 2 items at ₱50 each. Sold both for ₱120 total. Profit?",
      options: ["₱10", "₱20", "₱30", "₱40"],
      answer: "₱20",
      explanation: "Total CP = 100. SP = 120. Profit = 20."
    },
    {
      question: "Loss of ₱50 on an item sold for ₱250. CP?",
      options: ["₱200", "₱300", "₱350", "₱400"],
      answer: "₱300",
      explanation: "CP = 250 + 50 = 300."
    },
    {
      question: "Profit ₱100. CP ₱900. SP?",
      options: ["₱800", "₱900", "₱1000", "₱1100"],
      answer: "₱1000",
      explanation: "900 + 100 = 1000."
    },
    {
      question: "MP ₱500. Discount ₱100. SP?",
      options: ["₱300", "₱400", "₱500", "₱600"],
      answer: "₱400",
      explanation: "500 - 100 = 400."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Percentages)
  // ==========================================
  intermediate: [
    // 1-10: Profit %
    {
      question: "CP = ₱100, SP = ₱120. Profit %?",
      options: ["10%", "20%", "25%", "30%"],
      answer: "20%",
      explanation: "Profit = 20. (20/100)*100 = 20%."
    },
    {
      question: "Bought for ₱200, Sold for ₱250. Gain %?",
      options: ["20%", "25%", "30%", "40%"],
      answer: "25%",
      explanation: "Gain = 50. (50/200)*100 = 25%."
    },
    {
      question: "CP = ₱50, SP = ₱75. Profit %?",
      options: ["25%", "50%", "75%", "100%"],
      answer: "50%",
      explanation: "Profit = 25. (25/50)*100 = 50%."
    },
    {
      question: "A pen costs ₱20 and sells for ₱22. Profit %?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "Profit = 2. (2/20)*100 = 10%."
    },
    {
      question: "CP = ₱500, SP = ₱600. Gain %?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "Gain = 100. (100/500)*100 = 20%."
    },
    {
      question: "Bought for ₱80, sold for ₱100. Gain %?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "25%",
      explanation: "Gain = 20. (20/80)*100 = 25%."
    },
    {
      question: "Cost ₱150, Profit ₱30. Profit %?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "(30/150)*100 = 20%."
    },
    {
      question: "Cost ₱40, SP ₱50. Profit %?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "25%",
      explanation: "(10/40)*100 = 25%."
    },
    {
      question: "CP ₱1000, SP ₱1100. Gain %?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "(100/1000)*100 = 10%."
    },
    {
      question: "CP ₱250, SP ₱300. Profit %?",
      options: ["10%", "20%", "25%", "30%"],
      answer: "20%",
      explanation: "(50/250)*100 = 20%."
    },

    // 11-20: Loss %
    {
      question: "CP = ₱100, SP = ₱90. Loss %?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "Loss = 10. (10/100)*100 = 10%."
    },
    {
      question: "Bought ₱200, Sold ₱150. Loss %?",
      options: ["20%", "25%", "30%", "50%"],
      answer: "25%",
      explanation: "Loss = 50. (50/200)*100 = 25%."
    },
    {
      question: "CP ₱500, SP ₱400. Loss %?",
      options: ["10%", "20%", "25%", "30%"],
      answer: "20%",
      explanation: "Loss = 100. (100/500)*100 = 20%."
    },
    {
      question: "Cost ₱40, Sold ₱30. Loss %?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "25%",
      explanation: "Loss = 10. (10/40)*100 = 25%."
    },
    {
      question: "CP ₱50, SP ₱45. Loss %?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "Loss = 5. (5/50)*100 = 10%."
    },
    {
      question: "Bought ₱800, Sold ₱600. Loss %?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "25%",
      explanation: "Loss = 200. (200/800)*100 = 25%."
    },
    {
      question: "CP ₱120, SP ₱108. Loss %?",
      options: ["5%", "10%", "12%", "15%"],
      answer: "10%",
      explanation: "Loss = 12. (12/120)*100 = 10%."
    },
    {
      question: "CP ₱1000, Loss ₱100. Loss %?",
      options: ["1%", "5%", "10%", "20%"],
      answer: "10%",
      explanation: "(100/1000)*100 = 10%."
    },
    {
      question: "Cost ₱300, Sold ₱270. Loss %?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "Loss = 30. (30/300)*100 = 10%."
    },
    {
      question: "CP ₱20, SP ₱15. Loss %?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "25%",
      explanation: "Loss = 5. (5/20)*100 = 25%."
    },

    // 21-30: Calculate SP from Profit%
    {
      question: "CP ₱100, Gain 20%. SP?",
      options: ["₱110", "₱120", "₱130", "₱140"],
      answer: "₱120",
      explanation: "100 * 1.20 = 120."
    },
    {
      question: "CP ₱200, Profit 10%. SP?",
      options: ["₱210", "₱220", "₱230", "₱240"],
      answer: "₱220",
      explanation: "200 * 1.10 = 220."
    },
    {
      question: "Cost ₱500, Gain 50%. SP?",
      options: ["₱600", "₱700", "₱750", "₱800"],
      answer: "₱750",
      explanation: "500 * 1.50 = 750."
    },
    {
      question: "CP ₱50, Profit 10%. SP?",
      options: ["₱55", "₱60", "₱65", "₱70"],
      answer: "₱55",
      explanation: "50 * 1.10 = 55."
    },
    {
      question: "Cost ₱150, Gain 20%. SP?",
      options: ["₱170", "₱180", "₱190", "₱200"],
      answer: "₱180",
      explanation: "150 * 1.20 = 180."
    },
    {
      question: "CP ₱300, Profit 5%. SP?",
      options: ["₱315", "₱320", "₱325", "₱330"],
      answer: "₱315",
      explanation: "300 * 1.05 = 315."
    },
    {
      question: "Cost ₱1000, Gain 25%. SP?",
      options: ["₱1200", "₱1250", "₱1300", "₱1350"],
      answer: "₱1250",
      explanation: "1000 * 1.25 = 1250."
    },
    {
      question: "CP ₱80, Gain 25%. SP?",
      options: ["₱90", "₱100", "₱110", "₱120"],
      answer: "₱100",
      explanation: "80 * 1.25 = 100."
    },
    {
      question: "CP ₱60, Profit 50%. SP?",
      options: ["₱80", "₱90", "₱100", "₱110"],
      answer: "₱90",
      explanation: "60 * 1.50 = 90."
    },
    {
      question: "Cost ₱2000, Gain 10%. SP?",
      options: ["₱2100", "₱2200", "₱2300", "₱2400"],
      answer: "₱2200",
      explanation: "2000 * 1.10 = 2200."
    },

    // 31-40: Calculate SP from Loss%
    {
      question: "CP ₱100, Loss 10%. SP?",
      options: ["₱80", "₱85", "₱90", "₱95"],
      answer: "₱90",
      explanation: "100 * 0.90 = 90."
    },
    {
      question: "Cost ₱200, Loss 20%. SP?",
      options: ["₱150", "₱160", "₱170", "₱180"],
      answer: "₱160",
      explanation: "200 * 0.80 = 160."
    },
    {
      question: "CP ₱500, Loss 50%. SP?",
      options: ["₱200", "₱250", "₱300", "₱350"],
      answer: "₱250",
      explanation: "500 * 0.50 = 250."
    },
    {
      question: "Cost ₱50, Loss 10%. SP?",
      options: ["₱40", "₱45", "₱48", "₱49"],
      answer: "₱45",
      explanation: "50 * 0.90 = 45."
    },
    {
      question: "CP ₱80, Loss 25%. SP?",
      options: ["₱50", "₱60", "₱70", "₱75"],
      answer: "₱60",
      explanation: "80 * 0.75 = 60."
    },
    {
      question: "Cost ₱150, Loss 20%. SP?",
      options: ["₱110", "₱120", "₱130", "₱140"],
      answer: "₱120",
      explanation: "150 * 0.80 = 120."
    },
    {
      question: "CP ₱400, Loss 5%. SP?",
      options: ["₱360", "₱370", "₱380", "₱390"],
      answer: "₱380",
      explanation: "400 * 0.95 = 380."
    },
    {
      question: "Cost ₱1000, Loss 15%. SP?",
      options: ["₱800", "₱850", "₱900", "₱950"],
      answer: "₱850",
      explanation: "1000 * 0.85 = 850."
    },
    {
      question: "CP ₱20, Loss 25%. SP?",
      options: ["₱10", "₱15", "₱18", "₱19"],
      answer: "₱15",
      explanation: "20 * 0.75 = 15."
    },
    {
      question: "Cost ₱600, Loss 10%. SP?",
      options: ["₱500", "₱540", "₱550", "₱560"],
      answer: "₱540",
      explanation: "600 * 0.90 = 540."
    },

    // 41-50: Discounts & Tax
    {
      question: "MP ₱100, Discount 10%. SP?",
      options: ["₱80", "₱90", "₱95", "₱99"],
      answer: "₱90",
      explanation: "100 * 0.90 = 90."
    },
    {
      question: "Tag ₱200, Discount 20%. Pay?",
      options: ["₱150", "₱160", "₱170", "₱180"],
      answer: "₱160",
      explanation: "200 * 0.80 = 160."
    },
    {
      question: "List Price ₱500, Discount 50%. SP?",
      options: ["₱200", "₱250", "₱300", "₱350"],
      answer: "₱250",
      explanation: "500 * 0.50 = 250."
    },
    {
      question: "MP ₱50, Discount 10%. SP?",
      options: ["₱40", "₱45", "₱48", "₱49"],
      answer: "₱45",
      explanation: "50 * 0.90 = 45."
    },
    {
      question: "MP ₱1000, Discount 25%. SP?",
      options: ["₱700", "₱750", "₱800", "₱850"],
      answer: "₱750",
      explanation: "1000 * 0.75 = 750."
    },
    {
      question: "Cost ₱100, Tax 12%. Total?",
      options: ["₱110", "₱112", "₱120", "₱122"],
      answer: "₱112",
      explanation: "100 * 1.12 = 112."
    },
    {
      question: "Price ₱500, VAT 12%. Final Price?",
      options: ["₱550", "₱560", "₱600", "₱620"],
      answer: "₱560",
      explanation: "500 * 1.12 = 560."
    },
    {
      question: "Bill is ₱200. Service charge 10%. Total?",
      options: ["₱210", "₱220", "₱230", "₱240"],
      answer: "₱220",
      explanation: "200 * 1.10 = 220."
    },
    {
      question: "MP ₱800, Discount 10%. SP?",
      options: ["₱700", "₱720", "₱750", "₱780"],
      answer: "₱720",
      explanation: "800 * 0.90 = 720."
    },
    {
      question: "Tag ₱400, Discount 25%. SP?",
      options: ["₱300", "₱320", "₱350", "₱380"],
      answer: "₱300",
      explanation: "400 * 0.75 = 300."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Reverse & Logic)
  // ==========================================
  advanced: [
    // 1-10: Find CP from SP and Profit%
    {
      question: "Sold for ₱120, Gain 20%. CP?",
      options: ["₱90", "₱100", "₱110", "₱115"],
      answer: "₱100",
      explanation: "CP = SP / 1.20 = 120/1.2 = 100."
    },
    {
      question: "SP ₱240, Profit 20%. CP?",
      options: ["₱180", "₱200", "₱220", "₱230"],
      answer: "₱200",
      explanation: "240 / 1.20 = 200."
    },
    {
      question: "SP ₱330, Gain 10%. CP?",
      options: ["₱280", "₱300", "₱310", "₱320"],
      answer: "₱300",
      explanation: "330 / 1.10 = 300."
    },
    {
      question: "Sold ₱550, Profit 10%. CP?",
      options: ["₱450", "₱500", "₱520", "₱540"],
      answer: "₱500",
      explanation: "550 / 1.10 = 500."
    },
    {
      question: "SP ₱150, Gain 50%. CP?",
      options: ["₱90", "₱100", "₱110", "₱120"],
      answer: "₱100",
      explanation: "150 / 1.50 = 100."
    },
    {
      question: "Sold ₱720, Gain 20%. CP?",
      options: ["₱500", "₱600", "₱650", "₱700"],
      answer: "₱600",
      explanation: "720 / 1.20 = 600."
    },
    {
      question: "SP ₱125, Profit 25%. CP?",
      options: ["₱90", "₱100", "₱110", "₱115"],
      answer: "₱100",
      explanation: "125 / 1.25 = 100."
    },
    {
      question: "Sold ₱2200, Gain 10%. CP?",
      options: ["₱1900", "₱2000", "₱2100", "₱2150"],
      answer: "₱2000",
      explanation: "2200 / 1.10 = 2000."
    },
    {
      question: "SP ₱440, Profit 10%. CP?",
      options: ["₱380", "₱400", "₱410", "₱420"],
      answer: "₱400",
      explanation: "440 / 1.10 = 400."
    },
    {
      question: "Sold ₱180, Gain 20%. CP?",
      options: ["₱140", "₱150", "₱160", "₱170"],
      answer: "₱150",
      explanation: "180 / 1.20 = 150."
    },

    // 11-20: Find CP from SP and Loss%
    {
      question: "Sold ₱90, Loss 10%. CP?",
      options: ["₱95", "₱99", "₱100", "₱110"],
      answer: "₱100",
      explanation: "CP = SP / 0.90 = 90/0.9 = 100."
    },
    {
      question: "SP ₱80, Loss 20%. CP?",
      options: ["₱90", "₱100", "₱110", "₱120"],
      answer: "₱100",
      explanation: "80 / 0.80 = 100."
    },
    {
      question: "Sold ₱270, Loss 10%. CP?",
      options: ["₱280", "₱290", "₱300", "₱310"],
      answer: "₱300",
      explanation: "270 / 0.90 = 300."
    },
    {
      question: "SP ₱450, Loss 10%. CP?",
      options: ["₱480", "₱490", "₱500", "₱510"],
      answer: "₱500",
      explanation: "450 / 0.90 = 500."
    },
    {
      question: "Sold ₱250, Loss 50%. CP?",
      options: ["₱400", "₱500", "₱600", "₱700"],
      answer: "₱500",
      explanation: "250 / 0.50 = 500."
    },
    {
      question: "SP ₱850, Loss 15%. CP?",
      options: ["₱900", "₱950", "₱1000", "₱1050"],
      answer: "₱1000",
      explanation: "850 / 0.85 = 1000."
    },
    {
      question: "Sold ₱60, Loss 25%. CP?",
      options: ["₱70", "₱75", "₱80", "₱90"],
      answer: "₱80",
      explanation: "60 / 0.75 = 80."
    },
    {
      question: "SP ₱380, Loss 5%. CP?",
      options: ["₱390", "₱400", "₱410", "₱420"],
      answer: "₱400",
      explanation: "380 / 0.95 = 400."
    },
    {
      question: "Sold ₱540, Loss 10%. CP?",
      options: ["₱580", "₱600", "₱620", "₱640"],
      answer: "₱600",
      explanation: "540 / 0.90 = 600."
    },
    {
      question: "SP ₱160, Loss 20%. CP?",
      options: ["₱180", "₱190", "₱200", "₱220"],
      answer: "₱200",
      explanation: "160 / 0.80 = 200."
    },

    // 21-30: Find MP from SP and Discount%
    {
      question: "SP ₱90, Discount 10%. MP?",
      options: ["₱95", "₱99", "₱100", "₱110"],
      answer: "₱100",
      explanation: "MP = SP / 0.90 = 100."
    },
    {
      question: "Sold ₱800, Discount 20%. MP?",
      options: ["₱900", "₱950", "₱1000", "₱1100"],
      answer: "₱1000",
      explanation: "800 / 0.80 = 1000."
    },
    {
      question: "SP ₱45, Discount 10%. MP?",
      options: ["₱48", "₱50", "₱55", "₱60"],
      answer: "₱50",
      explanation: "45 / 0.90 = 50."
    },
    {
      question: "Sold ₱250, Discount 50%. MP?",
      options: ["₱400", "₱500", "₱600", "₱700"],
      answer: "₱500",
      explanation: "250 / 0.50 = 500."
    },
    {
      question: "SP ₱750, Discount 25%. MP?",
      options: ["₱900", "₱950", "₱1000", "₱1100"],
      answer: "₱1000",
      explanation: "750 / 0.75 = 1000."
    },
    {
      question: "Sold ₱300, Discount 25%. MP?",
      options: ["₱350", "₱380", "₱400", "₱450"],
      answer: "₱400",
      explanation: "300 / 0.75 = 400."
    },
    {
      question: "SP ₱720, Discount 10%. MP?",
      options: ["₱780", "₱800", "₱820", "₱850"],
      answer: "₱800",
      explanation: "720 / 0.90 = 800."
    },
    {
      question: "Sold ₱180, Discount 10%. MP?",
      options: ["₱190", "₱200", "₱210", "₱220"],
      answer: "₱200",
      explanation: "180 / 0.90 = 200."
    },
    {
      question: "SP ₱540, Discount 40%. MP?",
      options: ["₱800", "₱900", "₱1000", "₱1100"],
      answer: "₱900",
      explanation: "540 / 0.60 = 900."
    },
    {
      question: "Sold ₱160, Discount 20%. MP?",
      options: ["₱180", "₱190", "₱200", "₱210"],
      answer: "₱200",
      explanation: "160 / 0.80 = 200."
    },

    // 31-40: Successive Discounts & Logic
    {
      question: "20% and 10% successive discounts equal?",
      options: ["25%", "28%", "30%", "35%"],
      answer: "28%",
      explanation: "100 * 0.8 * 0.9 = 72. Discount 28%."
    },
    {
      question: "10% and 10% successive discounts equal?",
      options: ["18%", "19%", "20%", "21%"],
      answer: "19%",
      explanation: "100 * 0.9 * 0.9 = 81. Discount 19%."
    },
    {
      question: "50% and 50% successive discounts equal?",
      options: ["50%", "75%", "90%", "100%"],
      answer: "75%",
      explanation: "100 * 0.5 * 0.5 = 25. Discount 75%."
    },
    {
      question: "20% and 20% successive discounts equal?",
      options: ["36%", "38%", "40%", "44%"],
      answer: "36%",
      explanation: "100 * 0.8 * 0.8 = 64. Discount 36%."
    },
    {
      question: "If discount is 20%, what is the ratio SP:MP?",
      options: ["1:5", "4:5", "3:4", "2:3"],
      answer: "4:5",
      explanation: "SP is 80% of MP. 80/100 = 4/5."
    },
    {
      question: "If Profit is 25%, what is the ratio CP:SP?",
      options: ["4:5", "3:4", "5:6", "1:4"],
      answer: "4:5",
      explanation: "SP is 125% of CP. 100/125 = 4/5."
    },
    {
      question: "To gain 25%, by what fraction should CP be multiplied?",
      options: ["1/4", "4/5", "5/4", "3/2"],
      answer: "5/4",
      explanation: "1.25 = 125/100 = 5/4."
    },
    {
      question: "Loss is 1/5 of CP. What is Loss %?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "1/5 = 0.20 = 20%."
    },
    {
      question: "Gain is 1/4 of CP. What is Gain %?",
      options: ["20%", "25%", "30%", "40%"],
      answer: "25%",
      explanation: "1/4 = 0.25 = 25%."
    },
    {
      question: "30% and 10% successive discounts equal?",
      options: ["35%", "37%", "40%", "42%"],
      answer: "37%",
      explanation: "100 * 0.7 * 0.9 = 63. Discount 37%."
    },

    // 41-50: Misc Advanced Calculations
    {
      question: "Marked price is 20% higher than CP. No discount. Gain?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "SP = MP. MP is 120% of CP. Gain is 20%."
    },
    {
      question: "Buy 10 items for ₱100. Sell 10 items for ₱120. Profit %?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "Total CP 100, SP 120. Profit 20%."
    },
    {
      question: "Cost price ₱100. Markup 50%. Discount 10%. Profit?",
      options: ["₱35", "₱40", "₱45", "₱50"],
      answer: "₱35",
      explanation: "MP=150. SP = 150*0.9=135. Profit=35."
    },
    {
      question: "CP ₱200. Mark up 20%. Discount 10%. Gain %?",
      options: ["5%", "6%", "8%", "10%"],
      answer: "8%",
      explanation: "MP=240. SP=240*0.9=216. Profit=16. 16/200=8%."
    },
    {
      question: "Gain 20%. If CP increases by 10% and SP same, new Gain %?",
      options: ["8%", "9.09%", "10%", "11%"],
      answer: "9.09%",
      explanation: "Old CP 100, SP 120. New CP 110. Profit 10. 10/110 = 9.09%."
    },
    {
      question: "Loss 10%. If CP decreases 10% and SP same, result?",
      options: ["Loss 5%", "No Profit No Loss", "Gain 1%", "Gain 5%"],
      answer: "No Profit No Loss",
      explanation: "Old CP 100, SP 90. New CP 90. SP 90. Break even."
    },
    {
      question: "A grocer uses a weight of 900g for 1kg. Gain %?",
      options: ["10%", "11.11%", "12.5%", "15%"],
      answer: "11.11%",
      explanation: "Gain = 100g. Cost = 900g. 100/900 = 11.11%."
    },
    {
      question: "Buy 4 Get 1 Free. Discount %?",
      options: ["20%", "25%", "30%", "33%"],
      answer: "20%",
      explanation: "Free 1 / Total 5 = 20%."
    },
    {
      question: "Buy 3 Get 1 Free. Discount %?",
      options: ["20%", "25%", "33%", "50%"],
      answer: "25%",
      explanation: "Free 1 / Total 4 = 25%."
    },
    {
      question: "Sold at ₱540 gaining 20%. What SP to gain 10%?",
      options: ["₱495", "₱500", "₱510", "₱520"],
      answer: "₱495",
      explanation: "CP=450. 1.10 * 450 = 495."
    }
  ],
  // ==========================================
  // LEVEL 4: EXPERT (50 items – Complex & Tricky) - CORRECTED
  // ==========================================
  expert: [
    // 1-10: Dishonest Dealer & Weights
    {
      question: "Dealer claims to sell at cost but uses 800g weight for 1kg. Gain %?",
      options: ["20%", "25%", "30%", "33.33%"],
      answer: "25%",
      explanation: "Gain 200g. Cost 800g. 200/800 = 25%."
    },
    {
      question: "Uses 950g instead of 1kg. Gain %?",
      options: ["5%", "5.26%", "5.5%", "6%"],
      answer: "5.26%",
      explanation: "50/950 = 1/19 = 5.26%."
    },
    {
      question: "Uses 750g instead of 1kg. Gain %?",
      options: ["25%", "30%", "33.33%", "35%"],
      answer: "33.33%",
      explanation: "250/750 = 1/3 = 33.33%."
    },
    {
      question: "Dealer marks up 10% and uses 900g for 1kg. Net Profit?",
      options: ["20%", "21%", "22.22%", "25%"],
      answer: "22.22%",
      explanation: "CP for 1000g = 100. He charges 110. He gives goods worth 90. Profit 20 on cost 90. 20/90 = 22.22%."
    },
    {
      question: "Seller cheats 10% in buying and 10% in selling (weight). Gain?",
      options: ["20%", "21%", "22.22%", "25%"],
      answer: "21%",
      explanation: "Common formula (1.1 * 1.1) - 1 = 21% gain."
    },
    {
      question: "Uses 1.2kg weight instead of 1kg when buying. Gain?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "Gets 1200g for price of 1000g. Gain 200/1000 = 20%."
    },
    {
      question: "Claims to sell at 5% loss but uses 800g weight. Net Result?",
      options: ["Gain 18.75%", "Gain 20%", "Loss 5%", "Gain 15%"],
      answer: "Gain 18.75%",
      explanation: "CP=100. SP=95. Goods given=80. Profit=15. 15/80 = 18.75%."
    },
    {
      question: "If CP of 20 items equals SP of 15 items, Gain %?",
      options: ["20%", "25%", "33.33%", "35%"],
      answer: "33.33%",
      explanation: "Profit is 5 items on sale of 15. 5/15 = 1/3."
    },
    {
      question: "CP of 10 items equals SP of 12 items. Loss %?",
      options: ["16.67%", "20%", "25%", "30%"],
      answer: "16.67%",
      explanation: "Loss is 2 items on sale of 12. 2/12 = 1/6 = 16.67%."
    },
    {
      question: "CP of 12 items equals SP of 10 items. Gain %?",
      options: ["10%", "16.67%", "20%", "25%"],
      answer: "20%",
      explanation: "Gain 2 items on sale of 10. 2/10 = 20%."
    },

    // 11-20: Mixed Variable Problems
    {
      question: "Man sells two chairs at ₱500 each. One gains 20%, one loses 20%. Net?",
      options: ["No loss", "Loss 4%", "Gain 4%", "Loss 2%"],
      answer: "Loss 4%",
      explanation: "Formula X^2 / 100 loss. 400/100 = 4%."
    },
    {
      question: "Sold two cars at ₱100k each. +10% gain, -10% loss. Net?",
      options: ["No loss", "Loss 1%", "Gain 1%", "Loss 2%"],
      answer: "Loss 1%",
      explanation: "10^2 / 100 = 1% Loss."
    },
    {
      question: "A house sold for ₱1M at 25% loss. What was CP?",
      options: ["₱1.25M", "₱1.33M", "₱1.5M", "₱1.75M"],
      answer: "₱1.33M",
      explanation: "1M / 0.75 = 1.33M."
    },
    {
      question: "A reduction of 20% allows buying 5kg more for ₱320. Old price?",
      options: ["₱12", "₱15", "₱16", "₱20"],
      answer: "₱16",
      explanation: "New price: (20% of 320)/5 = 64/5 = 12.8. Old price = 12.8 / 0.8 = 16."
    },
    {
      question: "Reduction 10% allows buying 2kg more for ₱400. New price?",
      options: ["₱18", "₱20", "₱22", "₱25"],
      answer: "₱20",
      explanation: "(10% of 400)/2 = 40/2 = 20."
    },
    {
      question: "To gain 10% on CP, what must be the markup if discount is 12%?",
      options: ["20%", "25%", "30%", "33%"],
      answer: "25%",
      explanation: "Let CP=100. SP=110. 110 is 88% of MP. MP = 110/0.88 = 125. Markup 25%."
    },
    {
      question: "Marked price is ₱1600. Discount 10% + x%. Net paid ₱1224. Find x.",
      options: ["10%", "12%", "15%", "20%"],
      answer: "15%",
      explanation: "1600*0.9 = 1440. 1440 to 1224 diff is 216. 216/1440 = 0.15."
    },
    {
      question: "A merchant professes to lose 4% but uses 840g weight. Gain?",
      options: ["10%", "12.5%", "14.28%", "15%"],
      answer: "14.28%",
      explanation: "CP=100, SP=96. Goods=84. Profit 12 on 84. 1/7 = 14.28%."
    },
    {
      question: "Buy 5 Get 3 Free. Discount %?",
      options: ["30%", "37.5%", "40%", "60%"],
      answer: "37.5%",
      explanation: "Free 3 / Total 8 = 3/8 = 37.5%."
    },
    {
      question: "Sold at ₱240 with 10% loss. What SP for 10% gain?",
      options: ["₱280", "₱290", "₱293.33", "₱300"],
      answer: "₱293.33",
      explanation: "CP = 240/0.9 = 266.66. SP = 266.66 * 1.1 = 293.33."
    },

    // 21-30: Ratio & Proportion in P/L
    {
      question: "Ratio of CP to SP is 4:5. Profit %?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "25%",
      explanation: "Gain 1 unit on CP 4. 1/4 = 25%."
    },
    {
      question: "Ratio of CP to SP is 5:4. Loss %?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "20%",
      explanation: "Loss 1 unit on CP 5. 1/5 = 20%."
    },
    {
      question: "Ratio of CP to SP is 10:11. Gain %?",
      options: ["1%", "5%", "10%", "11%"],
      answer: "10%",
      explanation: "1/10 = 10%."
    },
    {
      question: "If SP is doubled, profit triples. Profit %?",
      options: ["66.67%", "100%", "120%", "200%"],
      answer: "100%",
      explanation: "Let CP=x, SP=y. 2y-x = 3(y-x). 2y-x = 3y-3x. 2x=y. SP is 2*CP. Profit 100%."
    },
    {
      question: "If SP becomes 3 times, profit becomes 5 times. Profit %?",
      options: ["50%", "100%", "150%", "200%"],
      answer: "100%",
      explanation: "3y-x = 5(y-x). 3y-x = 5y-5x. 4x=2y. y=2x. 100%."
    },
    {
      question: "A man buys pens at 5 for ₱4 and sells at 4 for ₱5. Gain %?",
      options: ["40%", "45%", "50%", "56.25%"],
      answer: "56.25%",
      explanation: "LCM of 5,4 is 20. CP of 20 = 16. SP of 20 = 25. Gain 9. 9/16 = 56.25%."
    },
    {
      question: "Buys oranges at 10 for ₱25, sells 9 for ₱25. Gain %?",
      options: ["9.09%", "10%", "11.11%", "12%"],
      answer: "11.11%",
      explanation: "CP 1 = 2.5. SP 1 = 2.77. Or use items: Gain 1 item on sale of 9. 1/9 = 11.11%."
    },
    {
      question: "Buys 6 for ₱5, sells 5 for ₱6. Gain %?",
      options: ["30%", "40%", "44%", "50%"],
      answer: "44%",
      explanation: "CP 30=25. SP 30=36. Gain 11/25 = 44%."
    },
    {
      question: "Loss is equal to SP. Loss %?",
      options: ["20%", "33.33%", "50%", "100%"],
      answer: "50%",
      explanation: "L=SP. CP = SP+L = 2SP. Loss 1 on CP 2. 50%."
    },
    {
      question: "Profit is 50% of SP. Profit % on CP?",
      options: ["50%", "75%", "100%", "150%"],
      answer: "100%",
      explanation: "P = 0.5SP. SP=2P. CP = SP-P = P. Profit/CP = P/P = 100%."
    },

    // 31-40: Advanced Break-even & Mix
    {
      question: "Two items sold at ₱99 each. One +10%, one -10%. Net amount loss?",
      options: ["₱1", "₱2", "₱4", "₱10"],
      answer: "₱2",
      explanation: "CP1=90. CP2=110. Total CP=200. Total SP=198. Loss ₱2."
    },
    {
      question: "Sold for ₱1, gains x%. Sold for ₱0.75, loses x%. x is?",
      options: ["10", "12.5", "14.28", "15"],
      answer: "14.28",
      explanation: "CP = 1/(1+x/100) = 0.75/(1-x/100). Solve: 1-x/100 = 0.75(1+x/100). 1-x/100 = 0.75+0.75x/100. 0.25 = 1.75x/100. x = (0.25*100)/1.75 = 14.28%."
    },
    {
      question: "After discount of 15%, profit is 19%. If no discount, profit?",
      options: ["30%", "35%", "40%", "45%"],
      answer: "40%",
      explanation: "Let CP=100. SP=119. MP = 119/0.85 = 140. No discount SP=140. Profit 40%."
    },
    {
      question: "Profit is 320% of cost. If cost increases 25% and SP constant, profit is?",
      options: ["215%", "236%", "240%", "250%"],
      answer: "236%",
      explanation: "CP=100. P=320. SP=420. New CP=125. P=295. 295/125 = 2.36 = 236%."
    },
    {
      question: "Manufacturer gains 10%, Wholesaler 15%, Retailer 25%. Total increase?",
      options: ["50%", "55%", "58%", "60%"],
      answer: "58%",
      explanation: "1.1 * 1.15 * 1.25 = 1.58125. Approx 58%."
    },
    {
      question: "Price dropped 20%. Sales increased 80%. Net revenue change?",
      options: ["+44%", "+50%", "+60%", "-10%"],
      answer: "+44%",
      explanation: "Revenue = P*Q. 0.8 * 1.8 = 1.44. Increase 44%."
    },
    {
      question: "A sells to B at 20% gain, B to C at 10% gain. C pays ₱660. A's cost?",
      options: ["₱450", "₱500", "₱550", "₱600"],
      answer: "₱500",
      explanation: "x * 1.2 * 1.1 = 660. x * 1.32 = 660. x = 500."
    },
    {
      question: "By selling 33m cloth, gain equals SP of 11m. Gain %?",
      options: ["25%", "33%", "40%", "50%"],
      answer: "50%",
      explanation: "Gain = SP(11). Gain = SP(33) - CP(33). SP(11) = SP(33) - CP(33). CP(33) = SP(22). Gain 11/22 = 50%."
    },
    {
      question: "By selling 33m cloth, loss equals SP of 3m. Loss %?",
      options: ["8.33%", "9.09%", "10%", "11.11%"],
      answer: "8.33%",
      explanation: "Loss = CP(33) - SP(33) = SP(3). CP(33) = SP(36). Loss 3/36 = 1/12 = 8.33%."
    },
    {
      question: "CP ₱2500. 20% Markup. 15% Discount. 12% Tax on SP. Final Price?",
      options: ["₱2800", "₱2856", "₱2900", "₱3000"],
      answer: "₱2856",
      explanation: "MP=3000. SP=2550. Tax=306. Final=2856."
    },

    // 41-50: Final Exam Challenge - CORRECTED
    {
      question: "Trader mixes 26kg rice at ₱20 with 30kg rice at ₱36. Sells mix at ₱30. Gain?",
      options: ["5%", "6%", "7%", "8%"],
      answer: "5%",
      explanation: "CP = 520+1080 = 1600. SP = 30*56 = 1680. Profit 80. 80/1600 = 5%."
    },
    {
      question: "Milk mixed with water sold at cost price earns 16.66%. Ratio Milk:Water?",
      options: ["5:1", "6:1", "1:6", "1:5"],
      answer: "6:1",
      explanation: "Gain 1/6 comes entirely from free water. Water is 1, Milk is 6."
    },
    {
      question: "Man buys table and chair for ₱500. Sells table at 10% loss, chair 10% gain. No P/L. Chair cost?",
      options: ["₱200", "₱250", "₱300", "₱350"],
      answer: "₱250",
      explanation: "Loss on table = Gain on chair. 0.1T = 0.1C -> T=C. 500/2 = 250."
    },
    {
      question: "Reduction of 25% in price enables buying 4 more apples for ₱1. Old price per apple?",
      options: ["₱0.06", "₱0.08", "₱0.10", "₱0.12"],
      answer: "₱0.08",
      explanation: "Savings 0.25 on ₱1. 0.25 buys 4 apples. New price 0.0625. Old = 0.0625/0.75 = 0.0833... (Approx 8 cents)."
    },
    {
      question: "Buy 3 items at ₱100 each. Sell 1st at 10% gain, 2nd 20% gain, 3rd 10% loss. Net?",
      options: ["Gain 6.67%", "Gain 10%", "Gain 20%", "No Profit"],
      answer: "Gain 6.67%",
      explanation: "P=10+20-10 = 20. Total CP 300. 20/300 = 6.67%."
    },
    {
      question: "Marked price ₱1000. Successive discounts 10%, 10%, 10%. SP?",
      options: ["₱700", "₱729", "₱750", "₱800"],
      answer: "₱729",
      explanation: "1000 * 0.9^3 = 729."
    },
    {
      question: "A sells article to B at profit. B sells to C at loss. If SP of A = SP of B, what is true?",
      options: ["A's CP > B's CP", "A's CP = B's CP", "A's CP < B's CP", "Impossible"],
      answer: "A's CP < B's CP",
      explanation: "SP_A = SP_B. A made profit: SP_A > CP_A. B made loss: SP_B < CP_B. Since SP_A = SP_B, then CP_A < SP_A = SP_B < CP_B, so CP_A < CP_B."
    },
    {
      question: "If discount is equal to profit, and markup is 50%, what is profit %?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "25%",
      explanation: "Let CP=100. MP=150. Let profit=P, discount=D, and D=P. SP = MP-D = 150-P = CP+P = 100+P. 150-P = 100+P. 50=2P. P=25. Profit% = 25%."
    },
    {
      question: "Discount is 3 times the profit. Markup is 60%. Profit %?",
      options: ["10%", "12%", "15%", "20%"],
      answer: "15%",
      explanation: "Let CP=100. MP=160. D=3P. SP = MP-D = 160-3P = CP+P = 100+P. 160-3P = 100+P. 60=4P. P=15. Profit% = 15%."
    },
    {
      question: "CP is ₱X. Old profit 20%. If CP drops 10% and SP rises 10%, new profit is ₱44 more than old profit. Find X.",
      options: ["₱100", "₱200", "₱400", "₱500"],
      answer: "₱200",
      explanation: "Old CP = X, Old SP = 1.2X, Old Profit = 0.2X. New CP = 0.9X, New SP = 1.32X (10% rise), New Profit = 0.42X. Diff = 0.22X = 44. X = 44/0.22 = 200."
    }
  ]
};
