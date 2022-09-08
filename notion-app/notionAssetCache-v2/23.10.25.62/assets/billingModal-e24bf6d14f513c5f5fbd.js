"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[105],{88625:(e,t,r)=>{r.r(t),r.d(t,{SpaceSubscriptionUpdatePaymentMethodModal:()=>_});var a=r(77094),n=r.n(a),o=(r(33948),r(86664)),s=r(67294),i=r.n(s),d=r(480),c=r(28350),l=r(24405),u=r(8848),p=r(7406),m=r(97880),g=r(82990),f=r(5366),v=r(21325),y=r(16100),h=r(1643),b=r(27832),M=r(45407),C=r(72693),S=r(47966),w=r(46951);function _(e){return n()(o.Elements,{stripe:(0,y.getStripe)()},void 0,i().createElement(k,e))}function k(e){const[t,r,a]=(0,c.oR)(void 0,M.Z),s=(0,o.useStripe)(),u=(0,o.useElements)(),[g,v]=i().useState(!1),[y,b]=i().useState(void 0),_=(0,d.O7)(),k=(0,f.useIntl)(),B=i().useCallback(((e,n)=>{t.paymentRequest||(r({...t,paymentRequest:e,supportsApplePay:Boolean(n&&n.applePay)}),a.addPaymentOption("native_payment_platform"))}),[r,a,t]);i().useEffect((()=>{if(s){const t=s.paymentRequest({country:"US",currency:"usd",total:{label:k.formatMessage({id:"spaceSubscriptionUpdatePaymentMethod.applePay.total.label",defaultMessage:"Notion - You will be charged on a recurring basis"}),amount:0}});t.canMakePayment().then((e=>{e&&B(t,e)})),t.on("token",(t=>{P({environment:_,spaceStore:e.spaceStore,stripeToken:t.token.id,customerData:e.customerData,onComplete:r=>{t.complete(r?"success":"fail"),e.onComplete()}})}))}}),[s,e,k,_,B]);const E=h.zt(t.availablePaymentMethods),D=(0,l.y)(x,[]);return g?n()("div",{style:D.container},void 0,n()("div",{style:D.header},void 0,n()(f.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.creditCard.update.header",defaultMessage:"Update credit card"})),n()("div",{style:D.cardContainer},void 0,n()(o.CardElement,{options:{hidePostalCode:!0}})),y&&n()(w.Z,{isMultiline:!1,style:D.error},void 0,y),n()("div",{style:D.upgradeButtonContainer},void 0,n()(C.Z,{style:D.upgradeButton,onClick:()=>async function(e){const{stripe:t,elements:r,environment:a,spaceStore:n,customerData:s,onComplete:i,setError:d}=e;if(!t||!r)return;const c=r.getElement(o.CardElement);if(!c)return;const l=await t.createToken(c);!l.error&&l.token?await P({environment:a,spaceStore:n,stripeToken:l.token.id,customerData:s,onComplete:i}):l.error&&d(l.error.message)}({stripe:s,elements:u,environment:_,spaceStore:e.spaceStore,customerData:e.customerData,onComplete:e.onComplete,setError:b})},void 0,n()(f.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.creditCard.updateButton",defaultMessage:"Update"})))):n()("div",{style:D.container},void 0,n()("div",{style:D.header},void 0,n()(f.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.update.header",defaultMessage:"Update payment method"})),n()("div",{style:D.optionGroup},void 0,E.map(((e,r)=>{let{type:a,title:o}=e;return n()("div",{onClick:()=>function(e){const{newPaymentMethod:t,setCreditCardSelected:r,paymentRequest:a}=e;if("credit_card"===t)r(!0);else{if("invoice"===t)throw new p.XV("You cannot select this payment collection method in the app. Please reach out to support.",{type:"collection_method_not_allowed"});"native_payment_platform"===t?a&&a.show():(0,m.t1)(t)}}({newPaymentMethod:a,paymentRequest:t.paymentRequest,setCreditCardSelected:v})},a,n()(S.Z,{style:{...D.option,...r!==E.length-1?D.optionBorder:void 0}},void 0,o))}))))}async function P(e){const{environment:t,spaceStore:r,stripeToken:a,customerData:n,onComplete:o}=e,{currentUserStore:s}=b.default.state,i=s?s.getValue():void 0,d=n.billingEmail||(i?i.email:void 0);if(!d)throw new Error("No billing email found.");o(await v.Mg({environment:t,spaceStore:r,stripeToken:a,billingEmail:d}))}function x(e){return{container:{width:500,background:e.popoverBackground,padding:30,borderRadius:3},optionGroup:{borderRadius:"2px",background:e.groupedFormBackground,border:"1px solid",borderColor:e.groupedFormBorder},option:{display:"flex",justifyContent:"flex-start",border:"none",height:void 0,paddingTop:"15px",paddingBottom:"15px"},optionBorder:{borderBottom:"1px solid",borderBottomColor:e.groupedFormBorder},header:{fontSize:18,marginBottom:16,fontWeight:g.Z.fontWeight.medium},cardContainer:{backgroundColor:e.groupedFormBackground,borderWidth:1,borderStyle:"solid",borderColor:e.groupedFormBackground,padding:"10px",marginTop:"10px",marginBottom:"10px"},upgradeButtonContainer:{width:"100%",justifyContent:"flex-end",display:"flex"},upgradeButton:{marginTop:"20px"},error:{marginTop:8,color:u.ZP.red}}}},16100:(e,t,r)=>{r.r(t),r.d(t,{injectStripe:()=>p,getStripe:()=>m,translateStripeError:()=>g});var a=r(77094),n=r.n(a),o=r(86664),s=r(97894),i=r(67294),d=r.n(i),c=r(50906),l=r(95477);let u=null;function p(e){return t=>n()(o.Elements,{stripe:m()},void 0,n()(o.ElementsConsumer,{},void 0,(r=>{let{stripe:a,elements:n}=r;const o={...t,stripe:a,elements:n};return d().createElement(e,o)})))}async function m(){return u||(s.loadStripe.setLoadParameters({advancedFraudSignals:!1}),u=(0,s.loadStripe)(l.default.stripe.key)),u}function g(e,t,r){if(!r.code)return r.message||"";switch((0,c._qN)(e,{error:r.code,stripe_decline_code:r.decline_code}),r.code){case"invalid_expiry_year_past":return t.formatMessage({id:"stripeHelpers.invalidExpiryYear.error.message",defaultMessage:"Your card's expiration year is in the past."});case"invalid_cvc":return t.formatMessage({id:"stripeHelpers.invalidCVC.error.message",defaultMessage:"Your card's security code is invalid."});case"invalid_number":return t.formatMessage({id:"stripeHelpers.invalidNumber.error.message",defaultMessage:"Your card number is not a valid credit card number."});case"card_declined":return function(e,t){switch(t){case"expired_card":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.expiredCard",defaultMessage:"Your card was declined because it is an expired card.",description:"Shown as an error message if a user's card was declined."});case"incorrect_number":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.incorrectNumber",defaultMessage:"Your card was declined because you input an incorrect number.",description:"Shown as an error message if a user's card was declined."});case"insufficient_funds":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.declinedFunds",defaultMessage:"Your card was declined because of insufficient funds.",description:"Shown as an error message if a user's card was declined."});case"invalid_cvc":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.invalidCvc",defaultMessage:"Your card was declined because you input an invalid CVC number",description:"Shown as an error message if a user's card was declined."});case"invalid_amount":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.invalidAmount",defaultMessage:"Your card was declined because payment amount exceeds the amount that's allowed.",description:"Shown as an error message if a user's card was declined."});default:return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message",defaultMessage:"Your card was declined.",description:"Shown as an error message if a user's card was declined."})}}(t,r.decline_code);default:return r.message||""}}},45407:(e,t,r)=>{r.d(t,{Z:()=>i});r(33948);var a=r(96486),n=r.n(a),o=r(49085);class s extends o.Z{getInitialState(){return{availablePaymentMethods:["credit_card"],paymentRequest:void 0,supportsApplePay:!1}}isPaymentOptionAvailable(e){return this.state.availablePaymentMethods.includes(e)}addPaymentOption(e){const t=n().uniq([...this.state.availablePaymentMethods,e]);this.setState({...this.state,availablePaymentMethods:t})}}const i=s}}]);