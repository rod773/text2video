import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/code-block";

export function OverviewSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-none">
        <h2 className="text-lg font-semibold mb-4">Overview</h2>
        <div className="prose prose-sm prose-invert max-w-none text-muted-foreground space-y-4">
          <p>
            Cosmos3 Nano is an NVIDIA world foundation model for generating physics-aware videos
            from text prompts or an image prompt. The API exposes the Cosmos3 generator path and
            returns an MP4 video encoded as a base64 string.
          </p>
          <p>
            The hosted Preview API deployment includes safety guardrails and SynthID watermarking
            for generated video outputs.
          </p>
          <p className="text-xs text-muted-foreground/60">
            <strong>Model Developer:</strong> NVIDIA
          </p>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold mb-3">Input / Output Specifications</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Input
              </h4>
              <ul className="space-y-1.5 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#76b900] mt-0.5">&bull;</span>
                  <span>Text prompt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#76b900] mt-0.5">&bull;</span>
                  <span>Optional image input as base64, data URI, or public URL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#76b900] mt-0.5">&bull;</span>
                  <span>Optional generation controls including seed, resolution, frame count, fps, steps, guidance scale, and negative prompt.</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Output
              </h4>
              <ul className="space-y-1.5 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#76b900] mt-0.5">&bull;</span>
                  <span>Video.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#76b900] mt-0.5">&bull;</span>
                  <span>MP4 container.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#76b900] mt-0.5">&bull;</span>
                  <span>Base64 encoded response field: <code className="text-foreground bg-muted px-1 rounded text-[10px]">b64_video</code>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Usage</h3>
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground">
              Send requests to the model endpoint with a JSON body:
            </p>
            <CodeBlock
              code={`{
  "prompt": "A robot moves through a clean industrial warehouse.",
  "resolution": "720_16_9",
  "num_output_frames": 189,
  "seed": 42
}`}
              language="json"
            />
            <p className="text-xs text-muted-foreground">
              The response contains:
            </p>
            <CodeBlock
              code={`{
  "b64_video": "<base64 encoded mp4>"
}`}
              language="json"
            />
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold mb-3">License</h3>
          <p className="text-sm text-muted-foreground">
            This model is released under the{" "}
            <a href="#" className="text-[#76b900] hover:underline">
              NVIDIA Open Model License
            </a>
            . For a custom license, contact{" "}
            <a href="mailto:cosmos-license@nvidia.com" className="text-[#76b900] hover:underline">
              cosmos-license@nvidia.com
            </a>
            .
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Under the NVIDIA Open Model License, NVIDIA confirms:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-[#76b900] mt-0.5">&bull;</span>
              <span>Models are commercially usable.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#76b900] mt-0.5">&bull;</span>
              <span>You are free to create and distribute Derivative Models.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#76b900] mt-0.5">&bull;</span>
              <span>NVIDIA does not claim ownership to any outputs generated using the Models or Derivative Models.</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Ethical Considerations</h3>
          <p className="text-sm text-muted-foreground">
            NVIDIA believes Trustworthy AI is a shared responsibility and has established policies
            and practices to enable development for a wide range of AI applications. Developers
            should work with their internal teams to ensure the model meets requirements for the
            relevant industry and use case and addresses unforeseen product misuse.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            For more detailed information, see the Explainability, Bias, Safety and Security, and
            Privacy cards.
          </p>
        </div>
      </div>
    </div>
  );
}
