"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
export default function NewHealthQuery() {
  const [symptoms, setSymptoms] = useState([""]);
  const [description, setDescription] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState("LOW");
  const [loading, setLoading] = useState(false);

  const updateSymptom = (value, index) => {
    const updated = [...symptoms];
    updated[index] = value;
    setSymptoms(updated);
  };

  const addSymptomField = () => {
    setSymptoms([...symptoms, ""]);
  };

  const removeSymptomField = (index) => {
    if (symptoms.length === 1) return;

    const updated = symptoms.filter((_, i) => i !== index);
    setSymptoms(updated);
  };

  const submitQuery = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/health-query/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          symptoms: symptoms.filter((s) => s.trim() !== ""),
          description,
          urgencyLevel,
        }),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        setSymptoms([""]);
        setDescription("");
        setUrgencyLevel("LOW");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting query.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow rounded-2xl">

        <h1 className="text-2xl font-bold text-gray-800">
          Register a Health Query
        </h1>
        <p className="text-gray-600 mt-1">Describe your issue and symptoms.</p>

        <form onSubmit={submitQuery} className="mt-6 space-y-6">

          <div>
            <label className="block font-semibold text-gray-700">
              Symptoms (Add or Remove)
            </label>

            <div className="space-y-3 mt-2">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-3">
                  
                  <Input
                    type="text"
                    value={symptom}
                    onChange={(e) => updateSymptom(e.target.value, index)}
                    placeholder={`Symptom ${index + 1}`}
                    required
                    className="flex-1 p-3 border rounded-lg"
                  />

                  {symptoms.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSymptomField(index)}
                      className="text-red-500 text-xl px-2 hover:text-red-700"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addSymptomField}
              className="mt-3 text-blue-600 font-semibold"
            >
              + Add another symptom
            </button>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Description
            </label>
            <Textarea
              className="mt-2 w-full p-3 border rounded-lg h-32"
              placeholder="Describe your symptoms, condition, duration, etc."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <Label className="block font-semibold text-gray-700">
              Urgency Level
            </Label>
            <select
              className="mt-2 w-full p-3 border rounded-lg"
              value={urgencyLevel}
              onChange={(e) => setUrgencyLevel(e.target.value)}
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            {loading ? "Submitting..." : "Submit Health Query"}
          </button>

        </form>
      </div>
    </main>
  );
}
