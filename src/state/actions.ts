import { IActions } from './reducer';
import { ExportVerifierResult, SetupResult } from './types';
import { Proof } from 'zokrates-js';

export const onLoaded = (provider: any): IActions => {
    return {
        type: 'set_loaded',
        payload: provider
    }
}

export const setCompilationResult = (artifacts: any, source: string): IActions => {
    return {
        type: 'set_compilation_result', 
        payload: { 
            artifacts, source 
        }
    }
}

export const setComputationResult = (output: any): IActions => {
    return {
        type: 'set_computation_result', 
        payload: output
    }
}

export const setSetupResult = (result: SetupResult): IActions => {
    return {
        type: 'set_setup_result', 
        payload: result
    }
}

export const setExportVerifierResult = (result: ExportVerifierResult): IActions => {
    return {
        type: 'set_export_verifier_result', 
        payload: result
    }
}

export const setGenerateProofResult = (proof: Proof): IActions => {
    return {
        type: 'set_generate_proof_result', 
        payload: proof
    }
}