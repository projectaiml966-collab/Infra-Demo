export const projects=[
{code:'PRJ-1001',name:'Solar EPC - Rajasthan 250 MW',region:'North',manager:'A. Sharma',budget:'₹412 Cr',progress:72,status:'Active'},
{code:'PRJ-1002',name:'Data Center Power Package',region:'West',manager:'R. Mehta',budget:'₹186 Cr',progress:48,status:'At Risk'},
{code:'PRJ-1003',name:'Green Hydrogen Pilot',region:'North',manager:'N. Verma',budget:'₹95 Cr',progress:63,status:'Active'},
{code:'PRJ-1004',name:'Metro Electrical Package',region:'South',manager:'S. Iyer',budget:'₹228 Cr',progress:84,status:'Active'},
{code:'PRJ-1005',name:'Industrial UPS Modernization',region:'East',manager:'P. Das',budget:'₹64 Cr',progress:31,status:'Delayed'}];
export const procurement=[
{id:'IND-240891',project:'PRJ-1001',material:'Solar PV Module 550Wp',qty:'4,800 EA',value:'₹5.76 Cr',owner:'Karan S.',status:'Pending',date:'24 Oct 2026'},
{id:'IND-240887',project:'PRJ-1004',material:'LT Power Cable 3.5C x 240',qty:'18,500 M',value:'₹1.92 Cr',owner:'Neha G.',status:'Approved',date:'23 Oct 2026'},
{id:'IND-240875',project:'PRJ-1002',material:'11kV VCB Panel',qty:'24 EA',value:'₹1.44 Cr',owner:'Amit R.',status:'In Review',date:'22 Oct 2026'},
{id:'IND-240861',project:'PRJ-1003',material:'Electrolyser Control Panel',qty:'8 EA',value:'₹82 L',owner:'Ritu P.',status:'Rejected',date:'21 Oct 2026'},
{id:'IND-240852',project:'PRJ-1001',material:'HDG Mounting Structure',qty:'620 MT',value:'₹4.15 Cr',owner:'Mohit J.',status:'Approved',date:'20 Oct 2026'}];
export const vendors=[{name:'Apex Cables Ltd.',score:94,otd:96,quality:98},{name:'SunGrid Modules',score:91,otd:92,quality:95},{name:'VoltEdge Systems',score:87,otd:84,quality:96},{name:'Prime Structures',score:82,otd:79,quality:91},{name:'Electra Controls',score:78,otd:76,quality:88}];
export const chartData=[{m:'May',d:62,s:55},{m:'Jun',d:75,s:68},{m:'Jul',d:69,s:73},{m:'Aug',d:88,s:76},{m:'Sep',d:94,s:86},{m:'Oct',d:82,s:79}];
export const stages=[['BOQ','1,248 Lines','done'],['Planning','82 Activities','done'],['Indent','46 Active','active'],['Approval','12 Pending','warn'],['PR','31 Open','active'],['Sourcing','18 Events','active'],['PO','64 Open','active'],['MFC','21 Active','warn'],['Inspection','9 Due','warn'],['Dispatch','14 Transit','active'],['GRN','7 Pending','warn'],['Consumption','68% Posted','active'],['Invoice','17 Pending','warn'],['Closure','3 Projects','muted']];
export const moduleRows={
'WBS Management':[['WBS-1001.01','Civil & Foundations','PRJ-1001','68%','Active'],['WBS-1001.02','Module Mounting','PRJ-1001','74%','Active'],['WBS-1002.01','Electrical Package','PRJ-1002','42%','At Risk']],
'BOQ Management':[['BOQ-2401','Solar PV Module 550Wp','48,000 EA','₹57.6 Cr','Rev 4'],['BOQ-2402','HDG Structure','6,200 MT','₹41.5 Cr','Rev 2'],['BOQ-2403','LT Cable','145,000 M','₹15.3 Cr','Rev 1']],
'Master Data':[['MAT-100482','Solar PV Module 550Wp','EA','S/4HANA','Synced'],['VEN-00291','Apex Cables Ltd.','Vendor','S/4HANA','Synced'],['PLT-1000','Noida Central Store','Plant','S/4HANA','Warning']],
'Planning & Schedule':[['ACT-1042','Module delivery - Block A','15 Nov 2026','4,800 EA','On Track'],['ACT-1098','Cable laying - Zone 2','04 Dec 2026','18,500 M','Risk'],['ACT-1120','VCB commissioning','12 Dec 2026','24 EA','On Track']],
'PR Management':[['PR-1100452','PRJ-1001','₹5.76 Cr','SAP Created','24 Oct 2026'],['PR-1100448','PRJ-1004','₹1.92 Cr','Released','23 Oct 2026'],['PR-1100436','PRJ-1002','₹1.44 Cr','In Approval','22 Oct 2026']],
'Sourcing':[['RFQ-2026-088','Solar PV Module','5 Vendors','Tech Evaluation','28 Oct 2026'],['RFQ-2026-084','LT Power Cable','4 Vendors','Commercial Open','25 Oct 2026'],['RFQ-2026-079','HDG Structure','6 Vendors','Awarded','20 Oct 2026']],
'Purchase Orders':[['4500128891','SunGrid Modules','₹28.4 Cr','Open','30 Nov 2026'],['4500128810','Apex Cables Ltd.','₹4.7 Cr','Partial','20 Nov 2026'],['4500128742','Prime Structures','₹12.8 Cr','Open','10 Dec 2026']],
'MFC Management':[['MFC-260188','4500128891','4,800 EA','Vendor Confirmed','05 Nov 2026'],['MFC-260181','4500128810','18,500 M','Approval Pending','29 Oct 2026'],['MFC-260172','4500128742','620 MT','Inspection Due','24 Oct 2026']],
'Vendor Portal':[['SunGrid Modules','3 Open POs','2 MFC','1 Inspection','Action Due'],['Apex Cables Ltd.','5 Open POs','1 MFC','2 Dispatches','Healthy'],['Prime Structures','2 Open POs','2 MFC','1 Inspection','Delayed']],
'Inspection':[['INS-260991','Prime Structures','HDG Structure','24 Oct 2026','Scheduled'],['INS-260982','SunGrid Modules','PV Modules','22 Oct 2026','Passed'],['INS-260974','VoltEdge Systems','VCB Panel','18 Oct 2026','Conditional']],
'Dispatch':[['DSP-261208','RJ14-GH-4821','LR-887201','Jaipur → Jaisalmer','In Transit'],['DSP-261194','HR55-AL-3408','LR-887166','Gurugram → Noida','Delivered'],['DSP-261177','GJ01-RT-9921','LR-887102','Ahmedabad → Chennai','Delayed']],
'GRN & Receipt':[['5000187211','4500128810','18,250 M','250 M Short','Partial'],['5000187189','4500128891','4,800 EA','No Variance','Complete'],['5000187166','4500128742','420 MT','200 MT Pending','Partial']],
'Consumption':[['CON-260882','PRJ-1001','Solar PV Module','3,240 EA','67.5%'],['CON-260871','PRJ-1004','LT Power Cable','12,840 M','69.4%'],['CON-260859','PRJ-1002','11kV VCB Panel','12 EA','50.0%']],
'Invoice & Billing':[['INV-SG-88241','4500128891','₹5.76 Cr','Matched','Ready to Book'],['INV-AC-77102','4500128810','₹1.89 Cr','Variance ₹3.1 L','On Hold'],['INV-PS-66218','4500128742','₹2.81 Cr','Matched','Booked']],
'Project Closure':[['PRJ-0994','Wind Balance of Plant','12/12 Complete','Ready','Generate Certificate'],['PRJ-0988','Factory Power Upgrade','10/12 Complete','Blocked','2 Actions'],['PRJ-0970','Rooftop Solar Bundle','12/12 Complete','Closed','Certificate Issued']],
'Reports & Analytics':[['REP-001','Procurement Coverage','Daily','22 Oct 2026','Download'],['REP-002','Open PO Aging','Weekly','20 Oct 2026','Download'],['REP-003','Vendor Performance','Monthly','01 Oct 2026','Download']],
'Administration':[['AAD SSO','Authentication','Connected','22 Oct 2026','Configure'],['SAP S/4HANA','ERP Integration','Connected','22 Oct 2026','Monitor'],['Wrench','Schedule Integration','Connected','22 Oct 2026','Monitor'],['ProcurEngine','Sourcing Integration','Degraded','22 Oct 2026','Review']]
};