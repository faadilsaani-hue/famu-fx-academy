import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Upload, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

const Payment = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('course');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please select a screenshot of your payment');
      return;
    }
    setIsSubmitting(true);
    // Simulate upload
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Payment submitted for verification!');
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Payment Instructions */}
        <div className="bg-[#111111] border border-gray-800 rounded-[2rem] p-8 md:p-10 order-2 lg:order-1">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <ShieldCheck className="text-[#D4AF37]" />
            How to Enroll
          </h2>
          
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-gray-800">
              <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-[#D4AF37]"></div>
              <h3 className="text-white font-bold mb-2">Step 1: Make Payment</h3>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm">
                  Transfer the course fee to Fadil Sani using the following details:
                </p>
                <div className="bg-black/40 border border-gray-800 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">CBE Account</span>
                    <span className="text-white font-mono font-bold">1000357848915</span>
                  </div>
                  <div className="h-px bg-gray-800 w-full"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">TeleBirr / Phone</span>
                    <span className="text-white font-mono font-bold">0989359724</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l border-gray-800">
               <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-gray-700"></div>
              <h3 className="text-white font-bold mb-2">Step 2: Take Screenshot</h3>
              <p className="text-gray-400 text-sm">
                Capture a clear screenshot of your successful transaction confirmation.
              </p>
            </div>

            <div className="relative pl-8 border-l border-gray-800">
               <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-gray-700"></div>
              <h3 className="text-white font-bold mb-2">Step 3: Verification</h3>
              <p className="text-gray-400 text-sm mb-4">
                Upload your payment screenshot here. Fadil Sani will verify and approve access to your course. Once approved, your course will unlock automatically.
              </p>
              <div className="bg-[#1E3A8A]/20 border border-[#1E3A8A]/30 p-4 rounded-xl flex items-center gap-3">
                <MessageCircle className="text-blue-400 shrink-0" size={20} />
                <div>
                  <p className="text-xs text-gray-400">For fast approval, contact us on Telegram:</p>
                  <a href="https://t.me/famufx" className="text-white font-bold hover:text-[#D4AF37] transition-colors">@famufx</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Form */}
        <div className="bg-[#111111] border border-gray-800 rounded-[2rem] p-8 md:p-10 order-1 lg:order-2">
          {!isSuccess ? (
            <>
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-white">Verification Portal</h2>
                <p className="text-gray-500 mt-2">Submit your proof of purchase</p>
              </div>

              <form onSubmit={handleUpload} className="space-y-6">
                <div
                  className={`border-2 border-dashed rounded-3xl p-10 text-center transition-all ${
                    file ? 'border-green-500 bg-green-500/5' : 'border-gray-700 hover:border-[#D4AF37] bg-black/30'
                  }`}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
                  }}
                >
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                    <div className={`h-16 w-16 mb-4 rounded-full flex items-center justify-center ${file ? 'bg-green-500/20 text-green-500' : 'bg-gray-800 text-gray-400'}`}>
                       <Upload className="h-8 w-8" />
                    </div>
                    <span className="text-lg font-bold text-white mb-2">
                      {file ? file.name : 'Select Screenshot'}
                    </span>
                    <p className="text-gray-500 text-sm">Max file size: 5MB (JPG, PNG)</p>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !file}
                  className="w-full bg-[#D4AF37] text-black font-bold py-5 rounded-2xl hover:bg-yellow-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg active:scale-95"
                >
                  {isSubmitting ? 'Uploading Proof...' : 'Verify My Enrollment'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10 animate-in fade-in duration-700">
              <div className="h-24 w-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="h-12 w-12 text-green-500 animate-bounce" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Submission Successful</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Your payment is being processed. Access will be granted shortly. Join the Telegram for live updates.
              </p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-[#1E3A8A] text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl"
                >
                  Go to Dashboard
                </button>
                <a 
                  href="https://t.me/famufx" 
                  target="_blank"
                  className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
                >
                  Need help? Contact @famufx
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Payment;