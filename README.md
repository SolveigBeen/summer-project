![poster](./poster.jpg)

# Sommarprojekt YumYum Gimmie Sum

Ett projekt att syssla med över sommaren ifall man vill hålla igång programmeringen.

## Case

**Grattis!**

Ditt uppdrag är att utveckla ett system till food trucken **Yum yum gimmi sum**.

Systemet är en webbapplikation som skall tillgodose några olika behov ( se user stories ) och se ut enligt [följande mockup](https://www.figma.com/file/KeFM1AHHgkPpt3KSi08hkB/Yum-yum-gimmi-sum?type=design&node-id=0%3A1&mode=design&t=J4OXlljHfDQI5TPX-1).

## Kravspec

### Teknisk kravspec

#### Frontend

Er frontend skall vara byggd med React, Typescript och SCSS, ifall man vill kan man bygga den enligt _monorepo-arkitekturen_.

För att bättre förstå denna arkitektur så finns i detta repo en [boilerplate till projektet](/boilerplate) där några olika packages finns.

#### Backend

Backend ska byggas i Firebase och menyn och ordrarna ska sparas i Firestore.

### User stories

Ni behöver inte ha någon inloggning för personal eller kund men ifall man vill kan man kolla in `Firebase Authentication` https://firebase.google.com/docs/auth.

#### Must have

- Som _kund_ vill jag få en fin upplevelese av YYGS-sidan via min telefon.
- Som _kund_ vill jag kunna se en meny för att inspiereras och kunna välja vad jag vill äta.
- Som _kund_ vill jag enkelt kunna klicka ihop en beställning
- Som _kund_ vill jag kunna kunna ändra min beställning innan jag skickar iväg den för jag är lite velig
- Som _personal_ vill jag kunna se beställningarna tydligt för att veta vad vi ska tillbereda
- Som _personal_ vill jag ha beställningarna sorterade på tid ( äldst > nyast ) för att veta i vilken ordning dom skall tillberedas
- Som _personal_ vill jag kunna markera när en beställning är redo att serveras för att meddela kunden att hämta den i luckan
- Som _kund_ vill jag göra mina beställningar via telefonen då jag sällan har datorn med mig på lunchen
- Som _personal_ vill jag kunna se beställningarna via en ipad i köket

#### Nice to have

- Som _kund_ vill jag få en ETA baserat på hur många och hur stora beställningar som är före mig i kön, så att jag kan avgöra om jag hinner köpa tuggummi på närliggande affären så länge
- Som _kund_ vill jag kunna göra en beställning antingen som _guest_ eller inloggad _customer_.
- Som _kund_ av typ inloggad _customer_ vill jag kunna se min orderhistorik
