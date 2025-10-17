import React from "react";
import { useTranslation } from "react-i18next";
import { FaFileSignature, FaInfoCircle } from "react-icons/fa";

const AboutOfferContract = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-[#63cacc]/20 shadow-sm px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#125e84] to-[#33babd] rounded-xl shrink-0 shadow-md">
            <FaFileSignature className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#125e84] mb-1">
              {t("about.contract.title")}
            </h3>
            <p className="text-[#125e84]/70 text-base md:text-lg">
              {t("about.contract.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Contract Sections */}
      <div className="bg-white rounded-2xl border border-[#63cacc]/20 shadow-sm p-6 md:p-8 space-y-8">
        {/* Section 1 */}
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              1
            </span>
            {t("about.contract.section1Title")}
          </h3>
          <p className="text-[#125e84]/80  leading-relaxed ml-9">
            {t("about.contract.section1Text")}
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              2
            </span>
            {t("about.contract.section2Title")}
          </h3>
          <p className="text-[#125e84]/80  leading-relaxed ml-9">
            {t("about.contract.section2Text")}
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              3
            </span>
            {t("about.contract.section3Title")}
          </h3>
          <div className="ml-9 space-y-4">
            <div>
              <h4 className="font-semibold text-[#63cacc] mb-2 ">
                {t("about.contract.responsibleRights")}
              </h4>
              <ul className="list-disc text-[#125e84]/80  space-y-2 marker:text-[#63cacc] ml-4">
                <li className="leading-relaxed">
                  {t("about.contract.contractor1")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.contractor2")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.contractor3")}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#63cacc] mb-2 ">
                {t("about.contract.prohibited")}
              </h4>
              <ul className="list-disc text-[#125e84]/80  space-y-2 marker:text-[#63cacc] ml-4">
                <li className="leading-relaxed">
                  {t("about.contract.prohibited1")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.prohibited2")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.prohibited3")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.prohibited4")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg font-bold text-[#63cacc] shrink-0">
              4
            </span>
            {t("about.contract.section4Title")}
          </h3>
          <div className="ml-9 space-y-4">
            <div>
              <h4 className="font-semibold text-[#63cacc] mb-2">
                {t("about.contract.customerRights")}
              </h4>
              <ul className="list-disc text-[#125e84]/80 space-y-2 marker:text-[#63cacc] ml-4">
                <li className="leading-relaxed">
                  {t("about.contract.customer1")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.customer2")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.customer3")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.customer4")}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#63cacc] mb-2 ">
                {t("about.contract.obliged")}
              </h4>
              <ul className="list-disc text-[#125e84]/80  space-y-2 marker:text-[#63cacc] ml-4">
                <li className="leading-relaxed">
                  {t("about.contract.obliged1")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.obliged2")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.obliged3")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.obliged4")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              5
            </span>
            {t("about.contract.section5Title")}
          </h3>
          <div className="ml-9 space-y-4">
            <p className="text-[#125e84]/80  leading-relaxed">
              {t("about.contract.section5Text")}
            </p>
            <div>
              <h4 className="font-semibold text-[#63cacc] mb-2 ">
                {t("about.contract.payment")}
              </h4>
              <ul className="list-disc text-[#125e84]/80  space-y-2 marker:text-[#63cacc] ml-4">
                <li className="leading-relaxed">
                  {t("about.contract.payment1")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.payment2")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.payment3")}
                </li>
                <li className="leading-relaxed">
                  {t("about.contract.payment4")}
                </li>
              </ul>
            </div>
            <p className="text-[#125e84]/80  leading-relaxed">
              {t("about.contract.paymentDesc")}
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              6
            </span>
            {t("about.contract.section6Title")}
          </h3>
          <p className="text-[#125e84]/80  leading-relaxed ml-9">
            {t("about.contract.section6Text")}
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg font-bold text-[#63cacc] shrink-0">
              7
            </span>
            {t("about.contract.section7Title")}
          </h3>
          <p className="text-[#125e84]/80  leading-relaxed ml-9">
            {t("about.contract.section7Text")}
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              8
            </span>
            {t("about.contract.section8Title")}
          </h3>
          <p className="text-[#125e84]/80  leading-relaxed ml-9">
            {t("about.contract.section8Text")}
          </p>
        </div>

        {/* Section 9 - Organization Details */}
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              9
            </span>
            {t("about.contract.section9Title")}
          </h3>
          <div className="ml-9 space-y-3">
            <p className="text-[#125e84]/80 leading-relaxed mb-4">
              {t("about.contract.section9Text")}
            </p>
            <div className="bg-[#63cacc]/5 rounded-xl p-4 border border-[#63cacc]/20 space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <div>
                  <span className="text-[#125e84]/60 text-sm uppercase tracking-wide">
                    {t("about.contract.orgName")}
                  </span>
                  <p className="text-[#125e84] font-medium">
                    {t("about.contract.orgDetails")}
                  </p>
                </div>
                <div>
                  <span className="text-[#125e84]/60 text-sm uppercase tracking-wide">
                    {t("about.contract.legalAddress")}
                  </span>
                  <p className="text-[#125e84] font-medium">
                    {t("about.contract.legalAddressValue")}
                  </p>
                </div>
                <div>
                  <span className="text-[#125e84]/60 text-sm uppercase tracking-wide">
                    {t("about.contract.taxId")}
                  </span>
                  <p className="text-[#125e84] font-medium">7712345678</p>
                </div>
                <div>
                  <span className="text-[#125e84]/60 text-xs uppercase tracking-wide">
                    {t("about.contract.checkpoint")}
                  </span>
                  <p className="text-[#125e84] font-medium">771201001</p>
                </div>
                <div>
                  <span className="text-[#125e84]/60 text-sm uppercase tracking-wide">
                    {t("about.contract.ogrn")}
                  </span>
                  <p className="text-[#125e84] font-medium">1234567890123</p>
                </div>
                <div>
                  <span className="text-[#125e84]/60 text-sm uppercase tracking-wide">
                    {t("about.contract.bankName")}
                  </span>
                  <p className="text-[#125e84] font-medium">
                    {t("about.contract.bank")}
                  </p>
                </div>
                <div>
                  <span className="text-[#125e84]/60 text-sm uppercase tracking-wide">
                    {t("about.contract.accountNo")}
                  </span>
                  <p className="text-[#125e84] font-medium">
                    40702810400000012345
                  </p>
                </div>
                <div>
                  <span className="text-[#125e84]/60 text-sm uppercase tracking-wide">
                    {t("about.contract.cAccount")}
                  </span>
                  <p className="text-[#125e84] font-medium">
                    30101810400000000225
                  </p>
                </div>
                <div>
                  <span className="text-[#125e84]/60 text-sm uppercase tracking-wide">
                    {t("about.contract.bic")}
                  </span>
                  <p className="text-[#125e84] font-medium">044525225</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Box At Bottom */}
      <div className="bg-[#63cacc]/10 rounded-2xl p-6 flex items-start gap-4 border border-[#63cacc]/30">
        <div className="flex h-10 w-10 items-center justify-center bg-[#63cacc]/20 rounded-full shrink-0">
          <FaInfoCircle className="text-[#63cacc] text-xl" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[#125e84] mb-1">
            {t("about.contract.addInfoTitle")}
          </div>
          <p className="text-[#125e84]/70 text-sm leading-relaxed">
            {t("about.contract.addInfoText")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOfferContract;
