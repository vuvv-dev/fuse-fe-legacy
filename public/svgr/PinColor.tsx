import { SVGProps } from "react";

interface PinProps extends SVGProps<SVGSVGElement> {
  variant?: "light" | "dark";
}

const PinColor = ({ variant = "dark", ...props }: PinProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Uploaded to svgrepo.com"
    fill="#000"
    viewBox="0 0 32 32"
    width={40}
    height={40}
    {...props}
  >
    <g id="SVGRepo_iconCarrier">
      <style>
        {
          ".st0{fill:#225b49}.st1{fill:#f28103}.st2{fill:#7bd6c4}.st3{fill:#f29227}.st4{fill:#ff7344}.st5{fill:#f8f7c5}.st6{fill:#f5df89}.st7{fill:#ad9a74}.st8{fill:none}.st9{fill:#be1e2d}.st10{fill:#f2d76c}.st11{fill:#72c0ab}.st12{fill:#569080}"
        }
      </style>
      <path
        d="M20.995 15.479c.024-.712-.452-1.438-1.488-1.978V12.18c1.201-.619 1.548-1.395 1.488-2.054v-1.52c-.004-.668-.442-1.337-1.315-1.839-1.767-1.018-4.623-1.023-6.379-.012-1.426.821-1.295 1.835-1.295 1.835v1.535c-.045.645.3 1.414 1.488 2.033v1.321c-1.038.535-1.513 1.259-1.488 1.971v1.489c-.049.702.381 1.414 1.315 1.952 1.767 1.018 4.623 1.023 6.379.012.935-.539 1.36-1.256 1.295-1.964v-1.46z"
        style={{
          fill: "#f96",
        }}
      />
      <path
        d="M20.995 15.421v1.519c.065.707-.36 1.425-1.295 1.964-1.756 1.011-4.612 1.006-6.379-.012-.934-.538-1.364-1.25-1.315-1.952v-1.535c.004.665.432 1.331 1.315 1.839 1.767 1.018 4.623 1.023 6.379.012.878-.506 1.298-1.17 1.295-1.835zm0-6.815c.013 2.387-5.004 3.362-7.675 1.823-.883-.509-1.311-1.175-1.315-1.839v1.535c-.045.645.3 1.414 1.488 2.033v1.782h.006c-.015.456.275.916.881 1.265 1.178.679 3.082.682 4.253.008.607-.35.891-.813.866-1.273h.009v-1.761c1.201-.619 1.548-1.395 1.488-2.054V8.606z"
        style={{
          fill: "#be1e2d",
        }}
      />
      <path
        d="M15.5 19.583v5.537h.002L16.5 27l1-1.88v-2.828c-.389-1.005-.881-1.905-1.463-2.661a7.384 7.384 0 0 1-.537-.048z"
        style={{
          fill: "#72c0ab",
        }}
      />
      <path
        d="M16.037 19.631c.582.755 1.074 1.656 1.463 2.661v-2.701a7.76 7.76 0 0 1-1.463.04z"
        style={{
          fill: "#569080",
        }}
      />
    </g>
  </svg>
);
export default PinColor;
