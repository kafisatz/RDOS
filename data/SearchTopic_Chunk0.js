define({"0":{y:0,u:"../Content/RDO/RDO_Intro.htm",l:-1,t:"It\u0027s Time for a Better Data Model",i:0.0203582243967081,a:"The  Risk Data Open Standard (RDOS) is a data specification that can represent a complete and unambiguous expression of risk, from exposure and coverage through analysis. It is flexible and extensible, able to accommodate any type of model and any line of business.  It can be implemented on any data ..."},"1":{y:0,u:"../Content/RDO/RDOS_ERD.htm",l:-1,t:"Entity Relationship Diagram",i:0.0180508925275125,a:"Entity Relationship Diagram"},"2":{y:0,u:"../Content/RDO/RDO_Concepts.htm",l:-1,t:"RDOS Concepts",i:0.0178319603227443,a:"This document discusses the framework of the Risk Data Open Standard (RDOS) concepts and schema. It describes the entities that comprise the  exposure ,  settings ,  results , and  reference  schemas. While it provides some field-level details, it primarily focuses on main areas and concepts. For ..."},"3":{y:0,u:"../Content/RDO/RDO_Concepts_Exposure.htm",l:-1,t:"Exposure Schema",i:0.0203582243967081,a:"The following entities in the exposure schema capture the physical location, characteristics, financial details, and organization of the exposures in a data set. See  Entity Relationship Diagram  for a visual representation of the schema. See the Exposure Schema tab of the RDOS schema specification  ..."},"4":{y:0,u:"../Content/RDO/RDO_Concepts_Settings.htm",l:-1,t:"Settings Schema",i:0.0313937192837178,a:"The entities in the settings schema store the settings used for running analyses. See  Table 1  for their descriptions. For the full specification of fields, data types, and values, see the Results \u0026 Settings Schema  tab of the RDOS schema specification  RDOS_Schema.xlsx . Read next:  Results Schema"},"5":{y:0,u:"../Content/RDO/RDO_Concepts_Results.htm",l:-1,t:"Results Schema",i:0.0485804404727952,a:"The entities in the results schema store the results from running analyses. See  Table 1  for their descriptions. For the full specification of fields, data types, and values, see the Results \u0026 Settings Schema  tab of the RDOS schema specification  RDOS_Schema.xlsx . Read next:  Reference Schema"},"6":{y:0,u:"../Content/RDO/RDO_Concepts_Reference.htm",l:-1,t:"Reference Schema",i:0.25791902726816,a:"The entities in the reference schema store reference data used by Contract Definition Language (CDL) and by analyses. Many of the tables include seeded data to which you can add your own. See   for their descriptions. For the full specification of fields, data types, and values, see the Reference ..."},"7":{y:0,u:"../Content/CDL/CDL_Semantics_Intro.htm",l:-1,t:"Contract Definition Language Semantics",i:0.0155246284535487,a:"Overview Contracts in the Risk Data Object (RDOS) are defined using Contract Definition Language (CDL). CDL is a domain-specific natural language for transparently and unambiguously defining how much a contract pays out given a set of discrete claims. For purposes of CDL semantics, claims are equal ..."},"8":{y:0,u:"../Content/CDL/CDL_Semantics_Flow.htm",l:-1,t:"CDL High-Level Flow",i:0.015362699646473,a:"Losses to a subject comprise the main input to a contract. A subject is defined external to the contract itself, meaning that a  contract does not determine its own subject nor how the contract payout is consumed. Order of Operations The subject of a contract flows first through any terms. Terms act ..."},"9":{y:0,u:"../Content/CDL/CDL_Semantics_Covers.htm",l:-1,t:"CDL Covers",i:0.0218920097321963,a:"Covers have a share, payout function, and attachment. Each of these has its own amount. The order of operations is attachment, payout, share. Attachment Normally, loss above the attachment is eligible for the payout function. In other words, if the subject loss of the cover is S, and the attachment ..."},"10":{y:0,u:"../Content/CDL/CDL_Semantics_Terms.htm",l:-1,t:"CDL Terms",i:0.0405007305368798,a:"Terms generally reduce claims.  If you consider a claim as a vertical quantity, deductibles generally take the lower portion while sublimits take the higher portion. What remains in the middle continues on to the covers. The reduction from a deductible = D, and the reduction from a sublimit = X. The ..."},"11":{y:0,u:"../Content/CDL/CDL_Semantics_Special.htm",l:-1,t:"CDL Special Topics",i:0.0497894222764594,a:"Amounts Each term has an amount, as does each cover limit and each cover attachment. Amounts in CDL can be a monetary amount (100 USD) or an expression resolvable to a monetary amount. This resolution can be done once if it is not event-dependent (5% RCV Covered), or once per event if it is ..."},"12":{y:0,u:"../Content/FinancialModel/DetailedFinancialModelExamples.htm",l:-1,t:"Detailed Contract Model Examples",i:0.0155246284535487,a:"Detailed  Contract  Model Examples The detailed examples in this section illustrate the calculations of the  Risk Data Open Standard contract model . These examples assume claims from one flood event affecting one location and causing (150k, 30k, 20k) USD loss to (Building, Contents, BI) unless ..."},"13":{y:0,u:"../Content/FinancialModel/SimpleCoversandTerms.htm",l:-1,t:"Simple Covers and Terms",i:0.0267184040291125,a:"These examples assume claims from one flood event affecting one location and causing (150k, 30k, 20k) USD loss to (Building, Contents, BI) unless stated otherwise.  Simple Covers A contract in Contract Definition Language (CDL) must have at least one cover. A cover must have a share, can optionally ..."},"14":{y:0,u:"../Content/FinancialModel/SimpleSections.htm",l:-1,t:"Simple Sections",i:0.100154690525122,a:"These examples assume claims from one flood event affecting one location and causing (150k, 30k, 20k) USD loss to (Building, Contents, BI) unless stated otherwise.  Sections are an optional component of CDL contracts. Sections have cover(s) and optionally declarations that apply only to the section. ..."},"15":{y:0,u:"../Content/FinancialModel/ComplexTerms.htm",l:-1,t:"Complex Terms",i:0.0259263666990752,a:"Contract Definition Language (CDL) includes features to model complex terms.  These examples assume claims from one flood event affecting one location and causing (150k, 30k, 20k) USD loss to (Building, Contents, BI) unless stated otherwise.  Max Deductible Sometimes when there are levels of ..."},"16":{y:0,u:"../Content/FinancialModel/ComplexCovers.htm",l:-1,t:"Complex Covers",i:0.0372820710817146,a:"Contract Definition Language (CDL) includes features to model complex covers.  These examples assume claims from one flood event affecting one location and causing (150k, 30k, 20k) USD loss to (Building, Contents, BI) unless stated otherwise.  Aggregate Limits and Attachments Like terms, each ..."},"17":{y:0,u:"../Content/FinancialModel/SpecialTopics.htm",l:-1,t:"Special Topics",i:0.0120636306497554,a:"Special Topics The content of this section addresses the following special topics: Expressions Simple Expressions Dynamic Expressions Currency Subschedules Sections Cashflows Reinstatements"},"18":{y:0,u:"../Content/FinancialModel/Expressions.htm",l:-1,t:"Expressions",i:0.0251908760277332,a:"Expressions in CDL can be simple expressions or dynamic expressions.  Simple Expressions Amounts in CDL can be expressions in addition to being numbers, such as when the share is a rational fraction without a terminating decimal representation, like 1/3. Contract  Declarations   Currency is USD  ..."},"19":{y:0,u:"../Content/FinancialModel/Currency.htm",l:-1,t:"Currency",i:0.014627208975131,a:"A contract in CDL declares a currency that applies to all contract amounts unless otherwise specified. Any amount in CDL can be in any currency. Currency symbols and their exchange rates are read from settings, which are user-definable. The following example assumes an exchange rate of 1 USD = 8 ..."},"20":{y:0,u:"../Content/FinancialModel/Subschedules.htm",l:-1,t:"Subschedules",i:0.014627208975131,a:"Each Cover and Term can be to a Risk or to a list of Risks. To keep the main body of CDL concise and readable, a list of risks can be defined as a named subschedule. Then the cover or term applies to the subschedule.  Contract  Declarations   Currency is USD     Covers   100% share   Sublimits ..."},"21":{y:0,u:"../Content/FinancialModel/Sections.htm",l:-1,t:"Sections",i:0.0997504687194937,a:"In addition to the main contract payout, it is often useful to have the contract output other results. Sections can be used for this. The contract in  Simple Sections  outputs not only its loss, but each section’s loss.  For example , a facultative cession could cover just the Policy1 section of the ..."},"22":{y:0,u:"../Content/RDO/RDO_Structure.htm",l:-1,t:"Structure Definition Language Overview",i:0.0120636306497554,a:"Structure Definition Language (SDL) allows you to form a precise subject of a treaty and specify financial positions. A Structure written in SDL models the flow of quantities such as risk, loss, premium, and expenses as they pass through CDL contracts and other transformations. What is a Structure? ..."},"23":{y:0,u:"../Content/RDO/RDO_Structure_Elements.htm",l:-1,t:"Structure Definition Language Elements",i:0.0223179439512579,a:"This topic describes simple structures using the Structure Definition Language (SDL) elements.  A simple Structure: Grouping The following structure defines two positions, Gross and Net. Structure  Gross is Direct + Assumed  Net is Gross - Ceded The Gross position is defined by evaluating the DIrect ..."},"24":{y:0,u:"../Content/TERMS/term_Dwell_Time.htm",l:-1,t:"Dwell Time",i:0.0120636306497554,a:"The dwell time modifier captures the average duration (in days) that a marine risk stays at a port or geocoded location. Unlike property risks that are at risk 365 days a year, cargo is at risk only when it is present at an insured location. Together with  number of shipments , the dwell time ..."},"25":{y:0,u:"../Content/TERMS/term_Number_of_Shipments.htm",l:-1,t:"Number of Shipments",i:0.0120636306497554,a:"The number of shipments attribute captures the number of relevant cargo shipments in a year. Together with  dwell time , the number of shipments attribute considers the transient nature of marine risks and enables accurate loss estimation. The valid range for input  is 0-9999. The default is 1 ..."},"26":{y:0,u:"../Content/Copyright.htm",l:-1,t:"Confidentiality Notice",i:0.0120636306497554,a:"Risk Management Solutions, Inc. (“RMS”) invests substantial time and financial resources in developing its proprietary applications, models, and data. Information concerning RMS applications, models, and data is protected under trade secret laws, among other intellectual property rights. Recipients ..."},});